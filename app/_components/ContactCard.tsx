import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string;
    className?: string;
}) => {
    return (
        <Link href={props.url || "#"} className={cn("w-full", props.className)} target="_blank" rel="noopener noreferrer">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4 cursor-pointer">
                <div className="relative w-10 h-10">
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
                        className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-cover"
                        width={20} 
                        height={20}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
            </Card>
        </Link>
    )
}
