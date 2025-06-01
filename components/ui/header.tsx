import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const Header = () => {
    return (
        <header className="container mx-auto py-6 px-4 md:px-6 bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    {/* Reemplaza el círculo con un logo */}
                    <div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300" // Agregué la clase de transición aquí
                    >
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">
                        <span className="text-purple-500">Singularity</span><span className="font-semibold">NET</span> Governance
                    </h1>
                </div>
                <div className="flex gap-4">
                    <Button
                        asChild
                        variant="outline"
                        className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-purple-300 border border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                    >
                        <a href="/login" className="px-4 py-2">Login with Discord</a>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
