import { Banknote, Code, LucideIcon, Pizza, Tractor } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "MicroService rabbitMq",
        description: "Microservice architecture using RabbitMQ.",
        url: "https://github.com/mikaelvery/MicroServiceAnnonce" 
    },
    {
        Logo: Tractor,
        title: "FarmApp",
        description: "Manage sheep farm stock and parcels.",
        url: "" 
    },
    {
        Logo: Pizza,
        title: "PizzaApp",
        description: "Order tracking like UberEats.",
        url: ""
    },
    {
        Logo: Code,
        title: "PlanningDoctor",
        description: "Automated scheduling for healthcare staff.",
        url: "" 
    },
    {
        Logo: Banknote,
        title: "KokotBank",
        description: "Banking application for financial management.",
        url: "https://github.com/mikaelvery/KokotBank_Symfony"
    },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link 
            href={props.url} 
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-full shadow-md">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};
