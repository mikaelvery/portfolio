import { Banknote, Code, LucideIcon, Pizza, Tractor } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "MicroService rabbitMq",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
    {
        Logo: Tractor,
        title: "FarmApp",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
    {
        Logo: Pizza,
        title: "PizzaApp",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
    {
        Logo: Code,
        title: "PlanningDoctor",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
    {
        Logo: Banknote,
        title: "KokotBank",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
]
type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}