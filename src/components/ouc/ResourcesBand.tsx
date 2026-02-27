function YellowIcon({kind}: { kind: "alert" | "assist" | "rebate" }) {
    const stroke = "stroke-[var(--yellow)] stroke-[2.4] fill-none";
    if (kind === "alert")
        return (
            <svg width="54" height="54" viewBox="0 0 24 24">
                <path className={stroke} d="M12 3l9 18H3L12 3z"/>
                <path className={stroke} d="M12 9v5"/>
                <path className={stroke} d="M12 17h.01"/>
            </svg>
        );
    if (kind === "assist")
        return (
            <svg width="54" height="54" viewBox="0 0 24 24">
                <path className={stroke} d="M12 2v6"/>
                <path className={stroke} d="M8 8h8"/>
                <path className={stroke} d="M4 14c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"/>
                <path className={stroke} d="M8 20h8"/>
            </svg>
        );
    return (
        <svg width="54" height="54" viewBox="0 0 24 24">
            <path className={stroke} d="M12 2v2"/>
            <path className={stroke} d="M7 7c0-2.5 10-2.5 10 0 0 4-10 4-10 8 0 3 10 3 10 0"/>
        </svg>
    );
}

function ResourceCol({
                         title,
                         desc,
                         kind,
                     }: {
    title: string;
    desc: string;
    kind: "alert" | "assist" | "rebate";
}) {
    return (
        <div className="text-center text-white">
            <div className="mx-auto mb-4 grid place-items-center">{<YellowIcon kind={kind}/>}</div>
            <div className="text-[34px] font-semibold tracking-wide">{title}</div>
            <p className="mx-auto mt-4 max-w-[330px] text-[18px] font-medium text-white/90">{desc}</p>
            <a
                href="#"
                className="mx-auto mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-[16px] font-semibold text-[var(--ouc-text-blue)]"
            >
                LEARN MORE <span className="ml-3">→</span>
            </a>
        </div>
    );
}

export function ResourcesBand() {
    return (
        <section className="relative bg-[var(--ouc-blue)] py-20">
            <div className="container-max">
                <h2 className="text-center text-[52px] font-light text-white">OUC Resources</h2>

                <div className="mt-16 grid gap-10 md:grid-cols-3">
                    <ResourceCol
                        kind="alert"
                        title="SET UP ALERTS"
                        desc="Receive notifications about your usage and bill reminders."
                    />
                    <ResourceCol
                        kind="assist"
                        title="PAYMENT ASSISTANCE"
                        desc="Options when you need some help paying your bill."
                    />
                    <ResourceCol
                        kind="rebate"
                        title="APPLY FOR A REBATE"
                        desc="Get cash back for home upgrades, appliances and more."
                    />
                </div>
            </div>

            {/* curved bottom like screenshot */}
            <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0">
                <svg viewBox="0 0 1440 140" className="h-[140px] w-full">
                    <path
                        d="M0,0 C420,130 1020,130 1440,0 L1440,140 L0,140 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}