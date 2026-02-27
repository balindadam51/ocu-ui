"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSession } from "@/lib/myoucSession";

type TabKey = "general" | "password";

export default function MyInfoClient() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const tab = (searchParams.get("tab") || "general") as TabKey;

    const [sessionLoaded, setSessionLoaded] = useState(false);
    const [customerName, setCustomerName] = useState("—");
    const [email, setEmail] = useState("—");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [stateRegion, setStateRegion] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("UNITED STATES");

    const username = useMemo(() => getSession()?.username ?? "", []);

    useEffect(() => {
        const s = getSession();
        if (!s) {
            router.replace("/"); // not logged in => no access
            return;
        }

        setCustomerName(s.customerName || "—");
        setEmail(s.email || "—");

        // addressLines example: ["420 E CHURCH ST APT 410", "ORLANDO, FL 32801", "UNITED STATES"]
        const lines = s.addressLines || [];
        setAddress1(lines[0] || "");
        setAddress2(lines[1]?.includes(",") ? "" : (lines[1] || "")); // optional
        // crude parse for "CITY, ST ZIP"
        const cityStateZip = lines.find((x) => x.includes(",") && /\d/.test(x)) || "";
        const m = cityStateZip.match(/^(.+?),\s*([A-Z]{2})\s+(\d{5})/);
        if (m) {
            setCity(m[1]);
            setStateRegion(m[2] === "FL" ? "Florida" : m[2]);
            setZip(m[3]);
        }

        const last = lines[lines.length - 1] || "";
        if (last.toUpperCase().includes("UNITED")) setCountry("UNITED STATES");

        setSessionLoaded(true);
    }, [router]);

    const setTab = (next: TabKey) => {
        const url = next === "general" ? "/myouc/my-info" : `/myouc/my-info?tab=${next}`;
        router.push(url);
    };

    if (!sessionLoaded) return null;

    return (
        <div className="myouc-container">
            <div className="myouc-grid">
                {/* SIDEBAR (same structure style you used) */}
                <aside className="myouc-sidebar">
                    <ul className="nav">
                        <li>
                            <a href="/myouc/account-summary">
                                <span className="myouc-ico">🏠</span>
                                Account Summary
                            </a>
                        </li>

                        <li className="active">
                            <a href="/myouc/my-info">
                                <span className="myouc-ico">👤</span>
                                My Info
                            </a>
                        </li>

                        <li className="expanded">
                            <a href="/myouc/billing">
                                <span className="myouc-ico">💳</span>
                                Billing &amp; Payment
                            </a>
                            <ul className="sub-nav">
                                <li>
                                    <a href="/myouc/billing/pay-by-echeck">Pay by eCheck</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/pay-by-card">Pay by Credit Card</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/pay-in-person">Pay in Person</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/report-problem">Report a Billing Problem</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/payment-history">Payment History</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="/myouc/service-requests">
                                <span className="myouc-ico">🧰</span>
                                Service Requests
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/outages">
                                <span className="myouc-ico">⚠️</span>
                                Outages &amp; Problems
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/rebates">
                                <span className="myouc-ico">🏷️</span>
                                Rebates &amp; Savings
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/alerts">
                                <span className="myouc-ico">🔔</span>
                                Alerts
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* MAIN */}
                <section>
                    <div className="myouc-heading">
                        <h2>My Info</h2>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                        <button
                            type="button"
                            onClick={() => setTab("general")}
                            className="myouc-btn myouc-btn-gray"
                            style={{
                                borderBottom: tab === "general" ? "3px solid var(--ouc-primary)" : "3px solid transparent",
                            }}
                        >
                            GENERAL INFORMATION
                        </button>

                        <button
                            type="button"
                            onClick={() => setTab("password")}
                            className="myouc-btn myouc-btn-gray"
                            style={{
                                borderBottom: tab === "password" ? "3px solid var(--ouc-primary)" : "3px solid transparent",
                            }}
                        >
                            PASSWORD
                        </button>
                    </div>

                    {/* Warning banner */}
                    <div
                        style={{
                            marginTop: 14,
                            background: "#fff3d9",
                            border: "1px solid #f1d39a",
                            borderRadius: 6,
                            padding: "12px 14px",
                        }}
                    >
                        <strong style={{ marginRight: 8 }}>⚠</strong>
                        Changes made to this page will not update your alert settings,&nbsp;
                        <a className="myouc-helper-link" href="/myouc/alerts">
                            Click Here
                        </a>{" "}
                        to update.
                    </div>

                    {tab === "password" ? (
                        <div className="myouc-module" style={{ marginTop: 18 }}>
                            <div className="titlebar">
                                <strong>Password</strong>
                            </div>
                            <div className="body">
                                <p className="myouc-muted" style={{ marginTop: 0 }}>
                                    Password editing can be added later. (UI placeholder)
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="myouc-module" style={{ marginTop: 18 }}>
                            <div className="titlebar">
                                <strong>General Information</strong>
                            </div>

                            <div className="body">
                                <p className="myouc-muted" style={{ marginTop: 0 }}>
                                    Use this form to update information for this account.
                                </p>

                                <div style={{ marginTop: 18 }}>
                                    <h3 style={{ margin: 0, color: "var(--ouc-primary)" }}>IDENTITY</h3>
                                    <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0 16px" }} />

                                    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", rowGap: 12 }}>
                                        <div>Full Name</div>
                                        <div>{customerName}</div>

                                        <div>Username</div>
                                        <div>{username}</div>
                                    </div>
                                </div>

                                <div style={{ marginTop: 26 }}>
                                    <h3 style={{ margin: 0, color: "var(--ouc-primary)" }}>MAILING &amp; BILLING ADDRESS</h3>
                                    <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0 10px" }} />
                                    <p className="myouc-muted" style={{ marginTop: 0 }}>
                                        All correspondence will be sent to this new address. Please note that if you are enrolled in
                                        Paperless Billing you will not receive a bill in the mail.
                                    </p>

                                    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 14, marginTop: 18 }}>
                                        <label>Country</label>
                                        <input value={country} readOnly className="myouc-input" />

                                        <label>
                                            Street Address Line 1 <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={address1} readOnly className="myouc-input" />

                                        <label>Street Address Line 2</label>
                                        <input value={address2} readOnly className="myouc-input" />

                                        <label>
                                            City <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={city} readOnly className="myouc-input" />

                                        <label>
                                            State/Province/Region <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={stateRegion} readOnly className="myouc-input" />

                                        <label>
                                            Zip Code / Postal Code <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={zip} readOnly className="myouc-input" />
                                    </div>
                                </div>

                                <div style={{ marginTop: 26 }}>
                                    <h3 style={{ margin: 0, color: "var(--ouc-primary)" }}>EMAIL ADDRESS</h3>
                                    <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0 10px" }} />
                                    <p className="myouc-muted" style={{ marginTop: 0 }}>
                                        Remember: Changes to your email address will apply to all online communications, including paperless
                                        statements.
                                    </p>

                                    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 14, marginTop: 18 }}>
                                        <label>
                                            Email <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={email} readOnly className="myouc-input" />

                                        <label>
                                            Confirm Email <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input value={email} readOnly className="myouc-input" />
                                    </div>
                                </div>

                                <div style={{ marginTop: 26 }}>
                                    <h3 style={{ margin: 0, color: "var(--ouc-primary)" }}>PHONE NUMBER</h3>
                                    <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0 10px" }} />
                                    <p className="myouc-muted" style={{ marginTop: 0 }}>
                                        To delete a phone number, select the remove button.
                                    </p>

                                    {/* Placeholder row like screenshot */}
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
                                        <div style={{ width: 260 }}>Primary Phone Number #1</div>

                                        <input value="786" readOnly className="myouc-input" style={{ width: 60 }} />
                                        <input value="531" readOnly className="myouc-input" style={{ width: 60 }} />
                                        <input value="9343" readOnly className="myouc-input" style={{ width: 80 }} />
                                        <span style={{ marginLeft: 8 }}>ext.</span>
                                        <input value="" readOnly className="myouc-input" style={{ width: 80 }} />
                                        <button type="button" className="myouc-btn myouc-btn-gray" title="Remove" style={{ marginLeft: 10 }}>
                                            🗑
                                        </button>
                                    </div>

                                    <div style={{ display: "flex", gap: 14, marginLeft: 260, marginTop: 8, fontSize: 14 }}>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" checked readOnly /> Primary
                                        </label>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" readOnly /> Home
                                        </label>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" readOnly /> Work
                                        </label>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" readOnly /> Mobile
                                        </label>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" readOnly /> Fax
                                        </label>
                                        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                            <input type="radio" readOnly /> Other
                                        </label>
                                    </div>
                                </div>

                                <div style={{ marginTop: 26, display: "flex", alignItems: "center", gap: 24 }}>
                                    <button type="button" className="myouc-btn myouc-btn-blue" style={{ borderRadius: 9999 }}>
                                        UPDATE INFORMATION
                                    </button>
                                    <a className="myouc-helper-link" href="/myouc/account-summary">
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}