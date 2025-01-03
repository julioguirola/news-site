import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { User } from "@/types";

function NavBar() {
    return (
        <nav className="flex gap-10 justify-between">
            <Link className="text-[14px]/[18px]" href="/">
                Inicio
            </Link>
            <Link className="text-[14px]/[18px]" href="/latest">
                Latest News
            </Link>
            <Link className="text-[14px]/[18px]" href="/newest">
                Newest Stories
            </Link>
            <Link className="text-[14px]/[18px]" href="/politics">
                Politicas de Privacidad
            </Link>
            <Link className="text-[14px]/[18px]" href="/contact">
                Contacto
            </Link>
        </nav>
    );
}

export default function MainLayout({
    auth,
    children,
}: PropsWithChildren<{ auth: { user: User } }>) {
    return (
        <>
            <Head title="Space News" />
            <header className="flex p-6 items-center justify-between bg-black text-white">
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                <NavBar />
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                            <Link href={route("login")}>Iniciar sesión</Link>
                            <Link href={route("register")}>Registrar</Link>
                        </>
                    )}
                </div>
            </header>
            {children}
            <footer className="flex flex-col bg-black text-white gap-6 p-10 pb-12">
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
                        <NavBar />
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
                        © 2023 Indie Space, LLC. All Rights Reserved. Use of
                        this site constitutes acceptance of our Terms of
                        Service, Privacy Policy and Do Not Sell or Share My
                        Personal Information. Indie Space may receive
                        compensation for some links to products and services on
                        this website. Offers may be subject to change without
                        notice.
                    </p>
                </div>
            </footer>
        </>
    );
}
