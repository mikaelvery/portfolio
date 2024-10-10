import { Section } from "./Section";
import { Card } from "@/components/ui/card";

const ApplicationGallery = () => {
    const APPLICATIONS = [
        {
            title: "Sheep Care",
            description: "Manage your sheep farm with stock and parcel management.",
            previewImage: "/loading.png",
            detailPageUrl: "/applications/sheep-care",
            githubUrl: "https://github.com/mikaelvery/sheep_care",
        },
        {
            title: "Pizza App",
            description: "Real-time GPS tracking for pizza delivery.",
            previewImage: "/PizzaApp.png",
            detailPageUrl: "/applications/pizza-app",
            githubUrl: "https://github.com/mikaelvery/pizza_app",
        },
    ];

    return (
        <Section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Mes Applications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {APPLICATIONS.map((app, index) => (
                    <Card key={index} className="flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                        <img src={app.previewImage} alt={app.title} className="w-full h-48 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">{app.title}</h3>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                        <div className="mt-2">
                            <a href={app.detailPageUrl} className="text-blue-600 hover:underline">Voir Détails</a>
                        </div>
                        <div className="mt-1">
                            <a href={app.githubUrl} className="text-blue-600 hover:underline">GitHub</a>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default ApplicationGallery;
