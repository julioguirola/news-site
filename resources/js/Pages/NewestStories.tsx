import Story from "@/Components/Story";
import { PageProps, StoriesProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";

export default function ({ auth }: PageProps) {
    const newestStories: StoriesProps[] = [
        {
            imgUrl: "/story0.png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/story1.png",
            title: "La Fuerza Espacial planea una arquitectura satelital de $8 mil millones para nuclear...",
            text: "La Fuerza Espacial planea una arquitectura satelital de $8 mil millones para comando y control nuclear...",
            category: "Espacio y Universo",
            readTime: "5 minutos de lectura",
        },
        {
            imgUrl: "/story2.png",
            title: "La lluvia de meteoritos Oriónidas de octubre está vinculada al cometa Halley: Da...",
            text: "¿Quieres saber cómo ver la lluvia de meteoritos Oriónidas de octubre y contemplar las maravillas del...",
            category: "Espacio y Universo",
            readTime: "5 minutos de lectura",
        },
        {
            imgUrl: "/story3.png",
            title: "China envía tres astronautas más a la estación espacial...",
            text: "China ha enviado tres astronautas a su estación espacial para reemplazar a la tripulación actual. El Shenzho...",
            category: "Espacio y Universo",
            readTime: "7 minutos de lectura",
        },
    ];
    return (
        <MainLayout auth={auth}>
            <section className="p-5 flex flex-col gap-5">
                <h2 className="text-black text-[28px]/[32px]">
                    Historias más recientes
                </h2>
                <div className="flex justify-between">
                    {newestStories.map((n, i) => {
                        return <Story {...n} key={i}></Story>;
                    })}
                </div>
            </section>
        </MainLayout>
    );
}
