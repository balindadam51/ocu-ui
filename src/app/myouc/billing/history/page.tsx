// src/app/myouc/billing/history/page.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/myoucSession";

type Row = {
    date: string;
    amount: string;
    source: string;
};

const rows: Row[] = [
    { date: "02/05/2026", amount: "$60.00", source: "Pay In Person" },
    { date: "02/05/2026", amount: "$100.00", source: "Credit Card" },
    { date: "02/04/2026", amount: "$100.00", source: "Credit Card" },
    { date: "02/04/2026", amount: "$100.00", source: "Credit Card" },
    { date: "01/14/2026", amount: "$100.00", source: "Credit Card" },
    { date: "12/28/2025", amount: "$100.00", source: "Credit Card" },
    { date: "12/06/2025", amount: "$100.00", source: "Credit Card" },
    { date: "11/05/2025", amount: "$100.00", source: "Credit Card" },
    { date: "09/21/2025", amount: "$100.00", source: "Credit Card" },
    { date: "08/24/2025", amount: "$100.00", source: "Credit Card" },
    { date: "07/23/2025", amount: "$100.00", source: "Credit Card" },
    { date: "06/25/2025", amount: "$100.00", source: "Credit Card" },
    { date: "05/30/2025", amount: "$100.00", source: "Credit Card" },
    { date: "05/05/2025", amount: "$100.00", source: "Pay In Person" },
];

export default function PaymentHistoryPage() {
    const router = useRouter();

    // Guard: must be logged in
    useEffect(() => {
        const s = getSession();
        if (!s) router.replace("/");
    }, [router]);

    return (
        <div className="myouc-container">
            <div className="myouc-grid">
                {/* SIDEBAR */}
                <aside className="myouc-sidebar">
                    <ul className="nav">
                        <li>
                            <Link href="/myouc/account-summary">
                                <span className="myouc-ico">🏠</span>
                                Account Summary
                            </Link>
                        </li>

                        <li>
                            <Link href="/myouc/my-info">
                                <span className="myouc-ico">👤</span>
                                My Info
                            </Link>
                        </li>

                        <li className="expanded active">
                            <Link href="/myouc/billing">
                                <span className="myouc-ico">💳</span>
                                Billing &amp; Payment
                            </Link>

                            <ul className="sub-nav">
                                <li>
                                    <Link href="/myouc/billing/pay-by-echeck">Pay by eCheck</Link>
                                </li>
                                <li>
                                    <Link href="/myouc/billing/pay-by-card">Pay by Credit Card</Link>
                                </li>
                                <li>
                                    <Link href="/myouc/billing/pay-in-person">Pay in Person</Link>
                                </li>
                                <li>
                                    <Link href="/myouc/billing/report-problem">Report a Billing Problem</Link>
                                </li>
                                <li className="active">
                                    <Link href="/myouc/billing/history">Payment History</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/myouc/service-requests">
                                <span className="myouc-ico">🧰</span>
                                Service Requests
                            </Link>
                        </li>

                        <li>
                            <Link href="/myouc/outages">
                                <span className="myouc-ico">⚠️</span>
                                Outages &amp; Problems
                            </Link>
                        </li>

                        <li>
                            <Link href="/myouc/rebates">
                                <span className="myouc-ico">🏷️</span>
                                Rebates &amp; Savings
                            </Link>
                        </li>

                        <li>
                            <Link href="/myouc/alerts">
                                <span className="myouc-ico">🔔</span>
                                Alerts
                            </Link>
                        </li>
                    </ul>
                </aside>

                {/* MAIN CONTENT */}
                <section>
                    <div className="myouc-heading">
                        <h2>Payment History</h2>
                    </div>

                    <p className="myouc-muted" style={{ marginTop: 6 }}>
                        Up to two years of payment history is provided.
                    </p>

                    {/* TABLE (styled like screenshot) */}
                    <div style={{ marginTop: 18, maxWidth: 920 }}>
                        <table
                            className="myouc-history-table"
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                border: "1px solid #000",
                                background: "#fff",
                                fontSize: 16,
                            }}
                        >
                            <thead>
                            <tr>
                                <th
                                    style={{
                                        background: "#0b6ea5",
                                        color: "#fff",
                                        textAlign: "left",
                                        padding: "14px 16px",
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        fontWeight: 700,
                                    }}
                                >
                                    Date
                                </th>
                                <th
                                    style={{
                                        background: "#0b6ea5",
                                        color: "#fff",
                                        textAlign: "left",
                                        padding: "14px 16px",
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        fontWeight: 700,
                                        width: 220,
                                    }}
                                >
                                    Amount
                                </th>
                                <th
                                    style={{
                                        background: "#0b6ea5",
                                        color: "#fff",
                                        textAlign: "left",
                                        padding: "14px 16px",
                                        borderBottom: "1px solid #000",
                                        fontWeight: 700,
                                    }}
                                >
                                    Payment Source
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            {rows.map((r, idx) => (
                                <tr key={`${r.date}-${idx}`}>
                                    <td
                                        style={{
                                            padding: "14px 16px",
                                            borderRight: "1px solid #000",
                                            borderBottom: "1px solid #000",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {r.date}
                                    </td>
                                    <td
                                        style={{
                                            padding: "14px 16px",
                                            borderRight: "1px solid #000",
                                            borderBottom: "1px solid #000",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {r.amount}
                                    </td>
                                    <td
                                        style={{
                                            padding: "14px 16px",
                                            borderBottom: "1px solid #000",
                                        }}
                                    >
                                        {r.source}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* RETURN BUTTON */}
                    <div style={{ marginTop: 26 }}>
                        <Link
                            href="/myouc/account-summary"
                            className="myouc-btn myouc-btn-blue myouc-btn-pill"
                            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 340 }}
                        >
                            RETURN TO ACCOUNT SUMMARY
                        </Link>
                    </div>

                    {/* Optional footnote area (kept, but hidden until you need it) */}
                    <div className="myouc-muted" style={{ marginTop: 18, display: "none" }}>
                        * Includes payments made through third parties or your bank&apos;s bill payment system.
                    </div>
                </section>
            </div>
        </div>
    );
}