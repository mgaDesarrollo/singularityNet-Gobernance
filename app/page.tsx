import { Button } from "@/components/ui/button"
import  Header  from '@/components/ui/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Users, VoteIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header/>
      <main className="container mx-auto py-12 px-4 md:px-6">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ambassador Program Governance Dashboard</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A platform for decentralized community participation in the management of quarterly reports and budgets.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/login">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <FileText className="h-12 w-12 text-purple-600 mb-2" />
              <CardTitle>Transparency</CardTitle>
              <CardDescription>
                Clear and accessible record of all proposals, discussions, and decisions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Access all quarterly reports and budget proposals in one place, with complete history and context.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mb-2" />
              <CardTitle>Participation</CardTitle>
              <CardDescription>
                Active contribution from community members with opinions, votes, and expertise.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join discussions, provide feedback, and help shape the direction of the Ambassador Program.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <VoteIcon className="h-12 w-12 text-purple-600 mb-2" />
              <CardTitle>Decision Making</CardTitle>
              <CardDescription>Efficient process for review, evaluation, and approval of proposals.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Vote on proposals, rate their effectiveness, and participate in the consensus-building process.</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticate</h3>
              <p>Sign in with your Discord account to access the dashboard based on your role.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Participate</h3>
              <p>Review proposals, join discussions, and provide your input on quarterly reports and budgets.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Vote</h3>
              <p>Cast your vote and help reach consensus on important decisions for the Ambassador Program.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  SN
                </div>
                <span className="font-bold">SingularityNET</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Decentralized AI Governance</p>
            </div>
            <div className="flex gap-8">
              <Link
                href="https://singularitynet.io"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                Main Website
              </Link>
              <Link
                href="https://discord.gg/singularitynet"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                Discord
              </Link>
              <Link
                href="https://github.com/singularitynet"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
