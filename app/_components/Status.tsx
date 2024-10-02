import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ALargeSmall, ArrowUpRight, Code, LucideIcon, MessageCircle, Pizza, Tractor, } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-4 w-full">
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
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Works</p>
                <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) =>(
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard 
                        name="@mikaelvery" 
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" 
                        description="66"
                    />
                    <ContactCard 
                        name="@mikaelvery" 
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://img.freepik.com/vecteurs-premium/icone-logo-vectoriel-instagram-logotype-medias-sociaux_901408-390.jpg?semt=ais_hybrid" 
                        description="300"
                    />
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-2 cursor-pointer">
            <div className="relative">
                <Image 
                    src={props.image} 
                    alt={props.name} 
                    className="w-10 h-10 rounded-full object-cover"
                    width={64} 
                    height={64} 
                />
                <Image 
                    src={props.mediumImage}
                    alt={props.name} 
                    className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-cover"
                    width={32} 
                    height={32}
                />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
        </Card>
    )
}


const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "ImmoIa",
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
        Logo: MessageCircle,
        title: "PlanningDoctor",
        description: "Lorem ipsum dolor sit amet, consectetur",
        url: ""
    },
    {
        Logo: ALargeSmall,
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

const WORKS: WorkProps[] = [
    {
        image: "https://lh3.googleusercontent.com/p/AF1QipP-Ny_4vxgr3ThWlvzDeQp1P62hwNFnuNCRw7zz=s680-w680-h510",
        title: "Immoia",
        role: "school developer project",
        date: "January 2024 - march 2024",
        url: "https://www.immoia.fr/",
        badge: true
    },
    {
        image: "https://2s-agency.fr/wp-content/uploads/2022/11/cropped-icon-site.png",
        title: "2SAgency",
        role: "developer internship",
        date: "March 2024 - May 2024",
        url: "https://2s-agency.fr/",
        badge: false
    },
] 
type WorkProps = {
    image: string    
    title: string;
    role: string;
    date: string;
    url: string;
    badge?: boolean;
};

const Work = (props: WorkProps) => {
    return (
        <Link 
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <Image 
                src={props.image} 
                className="w-10 h-10 object-contain rounded-md" 
                alt={props.title}
                width={64} 
                height={64}
            />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.badge && <Badge variant="outline">Project</Badge>}
                </div>
            <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    )
}