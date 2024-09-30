import { buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./Section"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedInIcon } from "./icons/LinkendInIcon"
import { TwitterIcon } from "./icons/TwitterIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    mikaelvery.com
                </h1>
                <div className="flex-1" />
                <ul className="flex itemsècenter gap-2">
                    <Link 
                        href="https://github.com/mikaelvery"
                        className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")} 
                    >
                        <GithubIcon size={15} className="text-foreground" />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/mikaelvery/"
                        className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")} 
                    >
                        <LinkedInIcon size={15} className="text-foreground" />
                    </Link>
                    <Link 
                        href="https://github.com/mikaelvery"
                        className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")} 
                    >
                        <TwitterIcon size={15} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}