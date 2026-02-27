"use client";

import {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import {clearSession, getSession, type MyOucSession} from "@/lib/myoucSession";

export default function AccountSummaryPage() {
    const router = useRouter();
    const [session, setSession] = useState<MyOucSession | null>(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setSession(getSession());
        setHydrated(true);
    }, []);

    const addressLines = useMemo(() => {
        return (session?.addressLines || []).filter(Boolean);
    }, [session]);

    const phoneEntries = useMemo(() => {
        const obj = session?.phoneNumbers || {};
        return Object.entries(obj).filter(([k, v]) => k && v);
    }, [session]);

    const onLogout = () => {
        clearSession(); // ONLY here
        router.replace("/"); // redirect to home
    };

    const onLogin = () => {
        router.push("/myouc");
    };

    // Avoid flicker before client hydration
    if (!hydrated) return null;

    // If user is NOT logged in, do not show account summary (but allow header to show "LOG IN")
    if (!session) {
        return (
            <div className="myouc-container">
                <div className="myouc-grid">
                    {/* SIDEBAR */}
                    <aside className="myouc-sidebar">
                        <ul className="nav">
                            <li className="active">
                                <a href="/myouc/account-summary">
                                    <span className="myouc-ico">🏠</span>
                                    Account Summary
                                </a>
                            </li>
                            <li>
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
                        <div
                            className="myouc-heading"
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                gap: 20,
                            }}
                        >
                            <div>
                                <h2>Account Summary</h2>
                                <div className="myouc-account-select">
                                    <em>Account Number:</em>
                                    <span className="single-account">—</span>
                                </div>
                            </div>

                            {/* TOGGLE: LOG IN */}
                            <div style={{display: "flex", alignItems: "center", gap: 12}}>
                                <button
                                    type="button"
                                    onClick={onLogin}
                                    className="myouc-btn myouc-btn-green"
                                    style={{textTransform: "uppercase"}}
                                >
                                    Log In
                                </button>
                            </div>
                        </div>

                        <div className="myouc-module" style={{marginTop: 16}}>
                            <div className="titlebar">
                                <strong>Session Required</strong>
                            </div>
                            <div className="body">
                                <p style={{margin: 0}}>
                                    You must log in to view your Account Summary.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    // Logged-in view
    return (
        <div className="myouc-container">
            <div className="myouc-grid">
                {/* SIDEBAR */}
                <aside className="myouc-sidebar">
                    <ul className="nav">
                        <li className="active">
                            <a href="/myouc/account-summary">
                                <span className="myouc-ico">🏠</span>
                                Account Summary
                            </a>
                        </li>

                        <li>
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

                {/* MAIN CONTENT */}
                <section>
                    <div
                        className="myouc-heading"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 20,
                        }}
                    >
                        <div>
                            <h2>Account Summary</h2>
                            <div className="myouc-account-select">
                                <em>Account Number:</em>
                                <span className="single-account">1094839264</span>
                            </div>
                        </div>

                        {/* TOGGLE: LOG OUT */}
                        <div style={{display: "flex", alignItems: "center", gap: 12}}>
              <span className="myouc-muted" style={{fontSize: 14}}>
                Logged in as <strong>{session.username}</strong>
              </span>
                            <button
                                type="button"
                                onClick={onLogout}
                                className="myouc-btn myouc-btn-green"
                                style={{textTransform: "uppercase"}}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>

                    <div className="myouc-modules">
                        {/* LEFT BIG MODULE */}
                        <div className="myouc-module">
                            <div className="titlebar">
                                <strong>OUC Power Pass Summary</strong>
                                <span className="myouc-muted">02/27/2026</span>
                            </div>

                            <div className="body">
                                <div className="myouc-row">
                                    <span>Account Balance</span>
                                    <strong>$63.28</strong>
                                </div>

                                <div style={{marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap"}}>
                                    <a className="myouc-btn myouc-btn-green" href="/myouc/billing">
                                        Make Payment
                                    </a>
                                    <button className="myouc-btn myouc-btn-blue" type="button">
                                        View Usage
                                    </button>
                                    <a className="myouc-btn myouc-btn-gray" href="/myouc/billing/history">
                                        Payment History
                                    </a>
                                </div>

                                <div style={{marginTop: 18}}>
                                    <div className="myouc-row">
                                        <span>Last Payment Amount</span>
                                        <span>$60.00</span>
                                    </div>
                                    <div className="myouc-row">
                                        <span>Last Payment Received</span>
                                        <span>02/05/2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT “MY INFO” MODULE */}
                        <div className="myouc-module myouc-info-block">
                            <div className="titlebar">
                                <strong>My Info</strong>
                                <a className="myouc-helper-link" href="/myouc/my-info">
                                    Edit Info
                                </a>
                            </div>

                            <div className="body">
                                <p>
                                    <strong>Customer Name</strong>
                                    <br/>
                                    {session.customerName}
                                </p>

                                <p>
                                    <strong>Mailing &amp; Billing Address</strong>
                                    <br/>
                                    {addressLines.map((l) => (
                                        <span key={l}>
                      {l}
                                            <br/>
                    </span>
                                    ))}
                                    <a className="myouc-helper-link" href="/myouc/my-info">
                                        Update
                                    </a>
                                </p>

                                <p>
                                    <strong>Email Address</strong>
                                    <br/>
                                    {session.email}
                                    <br/>
                                    <a className="myouc-helper-link" href="/myouc/my-info">
                                        Update
                                    </a>
                                </p>

                                <p>
                                    <strong>Phone Numbers</strong>
                                    <br/>
                                    {phoneEntries.map(([k, v]) => (
                                        <span key={k}>
                      <span className="myouc-muted">{k}</span> {v}
                                            <br/>
                    </span>
                                    ))}
                                    <a className="myouc-helper-link" href="/myouc/my-info">
                                        Update
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Alerts module below */}
                    <div style={{marginTop: 24}}>
                        <div className="myouc-module">
                            <div className="titlebar">
                                <strong>Alert Enrollment</strong>
                            </div>
                            <div className="body">
                                <p style={{margin: 0}}>
                                    <strong>Outage Enrollment Status</strong>
                                    <br/>
                                    <span className="myouc-muted">Preferences not set</span>
                                </p>
                                <div style={{marginTop: 12}}>
                                    <a className="myouc-helper-link" href="/myouc/alerts">
                                        Set Alert Preferences
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}