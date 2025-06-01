import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

// Replace the mock getUserRoleFromDiscord function with this implementation:

const getUserRoleFromDiscord = async (profile: any, accessToken: string) => {
  try {
    // Get the user's guilds (servers)
    const guildsResponse = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const guilds = await guildsResponse.json()

    // Find the SingularityNET server
    // Replace SINGULARITYNET_GUILD_ID with your actual Discord server ID
    const singularityGuild = guilds.find((guild: any) => guild.id === process.env.DISCORD_GUILD_ID)

    if (!singularityGuild) {
      return "member" // Default role if not in the server
    }

    // Get the user's roles in the server
    // This requires the bot to be in the server with proper permissions
    const memberResponse = await fetch(
      `https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/members/${profile.id}`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      },
    )

    if (!memberResponse.ok) {
      console.error("Failed to fetch member data:", await memberResponse.text())
      return "member" // Default role if we can't get roles
    }

    const memberData = await memberResponse.json()
    const userRoles = memberData.roles || []

    // Map Discord role IDs to application roles
    // Replace these with your actual Discord role IDs
    if (userRoles.includes(process.env.NEXT_PUBLIC_DISCORD_ADMIN_ROLE_ID)) {
      return "admin"
    } else if (userRoles.includes(process.env.NEXT_PUBLIC_DISCORD_CONTRIBUTOR_ROLE_ID)) {
      return "contributor"
    } else {
      return "member"
    }
  } catch (error) {
    console.error("Error fetching Discord roles:", error)
    return "member" // Default role on error
  }
}

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      authorization: { params: { scope: "identify email guilds" } },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && profile) {
        token.accessToken = account.access_token

        // Get the user's role from Discord
        const role = await getUserRoleFromDiscord(profile, account.access_token as string)
        token.role = role
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user role
      if (session.user) {
        session.user.role = token.role as string
        session.accessToken = token.accessToken as string
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }
