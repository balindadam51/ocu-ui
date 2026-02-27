import Image from "next/image";

function InfoCard({
                      image,
                      title,
                      body,
                  }: {
    image: string;
    title: string;
    body: string;
}) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/10">
            <div className="relative h-[290px] w-full">
                <Image src={image} alt={title} fill className="object-cover"/>
            </div>
            <div className="bg-[var(--card-blue)] p-10">
                <div className="text-[38px] font-light text-[var(--ouc-text-blue)]">{title}</div>
                <p className="mt-6 text-[18px] leading-relaxed text-gray-700">{body}</p>
                <a href="#"
                   className="mt-10 inline-flex items-center gap-3 text-[14px] font-semibold tracking-wide text-[var(--ouc-text-blue)]">
                    LEARN MORE <span
                    className="grid h-7 w-7 place-items-center rounded-full border border-[var(--ouc-text-blue)]">→</span>
                </a>
            </div>
        </div>
    );
}

export function TwoInfoCards() {
    return (
        <section className="py-16">
            <div className="container-max">
                <div className="grid gap-10 md:grid-cols-2">
                    <InfoCard
                        image="https://www.ouc.com/wp-content/uploads/2026/01/Cold-Weather.webp"
                        title="Weather &amp; Safety Tips"
                        body="Central Florida is known for its mild winters. But when there is an unusually low dip in temperatures, there are steps you can take to keep your family and your home safe."
                    />
                    <InfoCard
                        image="https://www.ouc.com/wp-content/uploads/2024/12/Hero_Usage-Dashboard.webp"
                        title="Usage Dashboard"
                        body="OUC makes it easy to get details on your electric and water usage, and your electric demand. When you better understand your usage, you can make changes to reduce your bill. Log in to your myOUC account to access the dashboard 24/7."
                    />
                </div>
            </div>
        </section>
    );
}