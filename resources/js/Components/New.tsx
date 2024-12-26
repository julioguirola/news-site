import { NewsProps } from "@/types";

export default function New({
    imgUrl,
    author,
    date,
    title,
    category,
    readTime,
}: NewsProps) {
    return (
        <article className="flex gap-5 h-[134px] items-center">
            <img src={imgUrl} width={130} />
            <div className="my-[7px] flex flex-col gap-4">
                <div className="flex gap-4 items-center text-[14px]/[24px]">
                    <p>{author}</p>
                    <div className="border-l w-0 h-4 border-white"></div>
                    <p>{date}</p>
                </div>
                <h3 className="text-[20px]/[26px]">{title}</h3>
                <div className="flex gap-4 items-center text-[14px]/[24px]">
                    <p>{category}</p>
                    <div className="border-l w-0 h-4 border-white"></div>
                    <p>{readTime}</p>
                </div>
            </div>
        </article>
    );
}
