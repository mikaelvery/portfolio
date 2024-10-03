import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const WORKS: WorkProps[] = [
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

export const Work = (props: WorkProps) => {
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