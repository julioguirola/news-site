import { StoriesProps } from "@/types";

export default function Story({
    imgUrl,
    title,
    text,
    category,
    readTime,
}: StoriesProps) {
    return (
        <article className="flex flex-col gap-5 w-[316px]">
            <img src={imgUrl} width={316} />
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-[9px]">
                    <h3 className="text-[16px]/[18px] text-black">{title}</h3>
                    <p className="text-[16px]/[18px] text-[#3D3D3D]">{text}</p>
                </div>
                <div className="flex gap-4 items-center text-[12px]/[22px] text-[#3D3D3D] justify-self-end">
                    <p>{category}</p>
                    <div className="border-l w-0 h-4 border-[#3D3D3D]"></div>
                    <p>{readTime}</p>
                </div>
            </div>
        </article>
    );
}
