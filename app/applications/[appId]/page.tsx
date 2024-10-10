"use client";

import { GithubIcon } from '@/app/_components/icons/GithubIcon';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppDetails {
    title: string;
    description: string;
    images: string[];
    videoUrl: string;
    githubUrl: string;
}

const ApplicationDetail = () => {
    const pathname = usePathname();
    const appId = pathname.split('/').pop();

    const APP_DETAILS: { [key: string]: AppDetails } = {
        "sheep-care": {
            title: "Sheep Care",
            description: "Manage your sheep farm with stock and parcel management.",
            images: ["/loading.png", "/login.png", "/sheep_care.png", "/sheep_care2.png", "/sheep_care3.png"],
            videoUrl: "in progress",
            githubUrl: "https://github.com/mikaelvery/sheep_care",
        },
        "pizza-app": {
            title: "Pizza App",
            description: "Real-time GPS tracking for pizza delivery.",
            images: [ "/PizzaApp.png", "/PizzaAppHome.png", "/PizzaApp_1.png" ],
            videoUrl: "/pizzaapp.webm",
            githubUrl: "https://github.com/mikaelvery/pizza_app",
        },
    };

    const app = appId ? APP_DETAILS[appId] : null; 

    return (
        <section className="flex flex-col items-center p-6 bg-primary-foreground text-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2 text-[#ddc67a]">{app?.title}</h1>
            <p className="text-sm mb-4 text-center">{app?.description}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                {app?.images?.map((image: string, index: number) => (
                    <div key={index} className="flex justify-center"> 
                        <img 
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            className="w-[300px] h-auto object-cover rounded-lg shadow-md" 
                        />
                    </div>
                ))}
            </div>
            {app?.videoUrl && (
                <div className="mt-4 w-full max-w-lg">
                    <h2 className="text-lg mb-2">Démonstration Vidéo</h2>
                    <iframe
                        src={app.videoUrl}
                        title="Demo video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[600px] rounded-md shadow-md" 
                    ></iframe>
                </div>
            )}
            <div className="mt-4">
                <Link 
                    href="https://github.com/mikaelvery"
                    className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")} 
                >
                    <GithubIcon size={15} className="text-foreground" />
                </Link>
            </div>
        </section>
    );
};

export default ApplicationDetail;
