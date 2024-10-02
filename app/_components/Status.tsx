import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Code, Home, LucideIcon, MessageCircle, StickyNote, Weight } from "lucide-react"
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) =>(
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            {/* <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
                Side Project
            </Card> */}
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="p-4 flex-1">
                    Work
                </Card>
                <Card className="p-4 flex-1">
                    Contact me
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: Code,
        title: "ImmoIa",
        description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        Logo: StickyNote,
        title: "FarmApp",
        description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        Logo: MessageCircle,
        title: "PizzaApp",
        description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        Logo: Weight,
        title: "LinkedLeads",
        description: "Lorem ipsum dolor sit amet, consectetur"
    },
]
type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
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