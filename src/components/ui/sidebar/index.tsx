import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            
            <div className="flex flex-col">
            <header>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>
                           <span>abrir</span> 
                        </Button>                        
                    </SheetTrigger>

                    <SheetContent>
                        <nav>
                            <Link href="#">
                                <span>logo</span>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
            </div>
        </div>
    );
}