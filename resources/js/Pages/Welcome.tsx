import { PageProps } from "@/types";
import New from "@/Components/New";
import { NewsProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";

export default function Welcome({ auth }: PageProps) {
    const news: NewsProps[] = [
        {
            imgUrl: "/new0.png",
            author: "Daniel Albarta",
            date: "22 de octubre de 2023",
            title: "Nubes lavadas y un cielo lloroso flotando boca abajo...",
            category: "Nuestro Planeta",
            readTime: "8 minutos de lectura",
        },
        {
            imgUrl: "/new1.png",
            author: "Donn Robinson",
            date: "21 de octubre de 2023",
            title: "Rocket Lab espera reanudar los lanzamientos de Electron...",
            category: "Espacio y Universo",
            readTime: "4 minutos de lectura",
        },
        {
            imgUrl: "/new2.png",
            author: "Natalia Freigman",
            date: "21 de octubre de 2023",
            title: "El Rover Curiosity descubre nueva evidencia de que Marte una vez...",
            category: "Espacio y Universo",
            readTime: "7 minutos de lectura",
        },
        {
            imgUrl: "/new3.png",
            author: "Antonio Roberto",
            date: "19 de octubre de 2023",
            title: "Datos satelitales revelan paisaje antiguo preservado...",
            category: "Espacio y Universo",
            readTime: "8 minutos de lectura",
        },
    ];

    return (
        <MainLayout auth={auth}>
            <main className="flex flex-col text-white">
                <section className="px-4 py-5 bg-black">
                    <div className="flex gap-5">
                        <article className="flex gap-8 w-fit">
                            <div className="flex flex-col justify-between basis-3/5">
                                <div className="flex flex-col gap-6">
                                    <h1 className="text-[60px]/[70px]">
                                        Los astronautas más jóvenes de Rusia
                                        despegan hacia la Estación Espacial
                                    </h1>
                                    <p className="text-[14px]/[24px]">
                                        El jueves, tres astronautas rusos
                                        despegaron en la nave espacial Moscow-17
                                        desde el Centro de Lanzamiento de
                                        Satélites Sputnik 1 en las profundidades
                                        del desierto de Gobi, con destino a la
                                        estación espacial Mir para una estancia
                                        de seis meses.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center text-[14px]/[24px] justify-self-end">
                                    <p>Espacio y Universo</p>
                                    <div className="border-l-[1px] w-0 h-4 border-white"></div>
                                    <p>Daniel Albarta</p>
                                    <div className="border-l-[1px] w-0 h-4 border-white"></div>
                                    <p>22 de octubre de 2023</p>
                                </div>
                            </div>
                            <img src="/astronaut.png" width={359} />
                        </article>
                        <section className="flex flex-col justify-between">
                            {news.map((n, i) => {
                                return <New {...n} key={i}></New>;
                            })}
                        </section>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
