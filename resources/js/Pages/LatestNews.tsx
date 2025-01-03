import Story from "@/Components/Story";
import MainLayout from "@/Layouts/MainLayout";
import { PageProps, StoriesProps } from "@/types";

export default function LatestNews({ auth }: PageProps) {
    const latest: StoriesProps[] = [
        {
            imgUrl: "/Image.png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(1).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(2).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(3).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(4).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(5).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(6).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(7).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(8).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(9).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(10).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(11).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(12).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(13).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(14).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
        {
            imgUrl: "/Image(15).png",
            title: "Rocket Lab apunta a volver a volar este año después de septiembre...",
            text: "Rocket Lab apunta a volver a volar este año después del fallo del lanzamiento de septiembre. La compañía todavía está en...",
            category: "Espacio y Universo",
            readTime: "3 minutos de lectura",
        },
    ];
    return (
        <MainLayout auth={auth}>
            <section className="p-5 pb-20 flex flex-col gap-5">
                <h2 className="text-black text-[28px]/[32px]">
                    Últimas noticias del mundo
                </h2>
                <div className="grid grid-cols-4 gap-y-10 gap-x-5">
                    {latest.map((n, i) => {
                        return <Story {...n} key={i}></Story>;
                    })}
                </div>
            </section>
        </MainLayout>
    );
}
