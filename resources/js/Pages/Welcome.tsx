import { PageProps, StoriesProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import New from "@/Components/New";
import { NewsProps } from "@/types";
import Story from "@/Components/Story";

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
        <>
            <Head title="Space News" />
            <div className="flex flex-col text-white">
                <header className="flex p-6 items-center justify-between bg-black">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-rocket"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                            <h1 className="font-light text-[20px]/[28px]">
                                Space News
                            </h1>
                        </div>
                        <p>Web sobre el spacio y tecnología</p>
                    </div>
                    <nav className="flex gap-10 justify-between">
                        <Link className="text-[14px]/[18px]" href="/">
                            Noticias
                        </Link>
                        <Link className="text-[14px]/[18px]" href="/">
                            Opinión
                        </Link>
                        <Link className="text-[14px]/[18px]" href="/">
                            Tecnología
                        </Link>
                        <Link className="text-[14px]/[18px]" href="/">
                            Nuestro Planeta
                        </Link>
                        <Link className="text-[14px]/[18px]" href="/">
                            Salud y Ciencia
                        </Link>
                    </nav>
                    <form className="flex gap-2 items-center">
                        <input
                            placeholder="Search ..."
                            className="focus:border-0 focus:border-b focus:border-b-white focus:ring-0 ring-0 border-0 border-b bg-black border-b-black"
                        />
                        <button onClick={(e) => e.preventDefault()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </button>
                    </form>
                    <div className="flex gap-5 justify-between text-[14px]/[18px]">
                        {auth.user ? (
                            <Link href={route("dashboard")}>Dashboard</Link>
                        ) : (
                            <>
                                <Link href={route("login")}>
                                    Iniciar sesión
                                </Link>
                                <Link href={route("register")}>Registrar</Link>
                            </>
                        )}
                    </div>
                </header>
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
                <section className="flex flex-col bg-black text-white gap-6 p-10 pb-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[18px]">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-rocket"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                        <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    </svg>
                                    <h1 className="font-light text-[20px]/[28px]">
                                        Space News
                                    </h1>
                                </div>
                                <div className="flex items-center gap-[6px]">
                                    <div className="w-9 h-9 rounded-full border border-gray-500 flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M16.5 7.5v.01" />
                                        </svg>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-gray-500 flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                                        </svg>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-gray-500 flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                        </svg>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-gray-500 flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-threads"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <nav className="flex gap-10 justify-between">
                                <Link className="text-[14px]/[18px]" href="/">
                                    Noticias
                                </Link>
                                <Link className="text-[14px]/[18px]" href="/">
                                    Opinión
                                </Link>
                                <Link className="text-[14px]/[18px]" href="/">
                                    Tecnología
                                </Link>
                                <Link className="text-[14px]/[18px]" href="/">
                                    Nuestro Planeta
                                </Link>
                                <Link className="text-[14px]/[18px]" href="/">
                                    Salud y Ciencia
                                </Link>
                            </nav>
                            <div className="flex flex-col gap-[18px]">
                                <h1 className="font-light text-[20px]/[28px]">
                                    Contacto
                                </h1>
                                <Link
                                    className="text-[14px]/[18px]"
                                    href="mailto:spacenews@gmail.com"
                                >
                                    spacenews@gmail.com
                                </Link>
                            </div>
                        </div>
                        <p className="text-[14px]/[18px] text-gray-500 text-center">
                            © 2023 Indie Space, LLC. All Rights Reserved. Use
                            of this site constitutes acceptance of our Terms of
                            Service, Privacy Policy and Do Not Sell or Share My
                            Personal Information. Indie Space may receive
                            compensation for some links to products and services
                            on this website. Offers may be subject to change
                            without notice.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
