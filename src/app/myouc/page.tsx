// app/myouc/account-summary/page.tsx
"use client"

import Link from "next/link";

export default function AccountSummaryPage() {
    // Replace these with real data later
    const accountNumber = "1094839264";
    const customerName = "Ancuta,Georgiana-Catalina";
    const addressLines = [
        "420 E CHURCH ST APT 410",
        "ORLANDO, FL 32801",
        "UNITED STATES",
    ];
    const email = "Ancutageorgiana1996@gmail.com";
    const phone = "(786) 531-9343";

    return (
        <main className="myouc-wrap">
            <div className="main container">
                <div className="row">
                    {/* LEFT NAV */}
                    <aside className="myouc sidebar" aria-label="MyOUC Sidebar">
                        <ul className="nav" id="sidebar_nav">
                            <li className="active">
                                <Link href="/myouc/account-summary">
                                    <span className="ico summary" aria-hidden="true" />
                                    Account Summary
                                </Link>
                            </li>

                            <li>
                                <Link href="/myouc/my-info">
                                    <span className="ico info" aria-hidden="true" />
                                    My Info
                                </Link>
                            </li>

                            <li className="has-children">
                                <Link href="/myouc/billing">
                                    <span className="ico billing" aria-hidden="true" />
                                    Billing &amp; Payment
                                </Link>
                                <ul className="sub-nav">
                                    <li>
                                        <Link href="/myouc/billing/echeck">
                                            <span className="caret" aria-hidden="true" />
                                            Pay by eCheck
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/billing/credit-card">
                                            <span className="caret" aria-hidden="true" />
                                            Pay by Credit Card
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/billing/in-person">
                                            <span className="caret" aria-hidden="true" />
                                            Pay in Person
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/billing/report-problem">
                                            <span className="caret" aria-hidden="true" />
                                            Report a Billing or Payment Problem
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-children">
                                <Link href="/myouc/service-requests">
                                    <span className="ico service" aria-hidden="true" />
                                    Service Requests
                                </Link>
                                <ul className="sub-nav">
                                    <li>
                                        <Link href="/myouc/service-requests/start">
                                            <span className="caret" aria-hidden="true" />
                                            Start Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/service-requests/stop">
                                            <span className="caret" aria-hidden="true" />
                                            Stop Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/service-requests/move">
                                            <span className="caret" aria-hidden="true" />
                                            Move Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/service-requests/status">
                                            <span className="caret" aria-hidden="true" />
                                            Get Service Request Status
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-children">
                                <Link href="/myouc/outages">
                                    <span className="ico outages" aria-hidden="true" />
                                    Outages &amp; Service Problems
                                </Link>
                                <ul className="sub-nav">
                                    <li>
                                        <Link href="/myouc/outages/report">
                                            <span className="caret" aria-hidden="true" />
                                            Report an Outage or Service Problem
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="https://outagemap.ouc.com/external/default.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="caret" aria-hidden="true" />
                                            Outage Map
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/myouc/outages/hazard">
                                            <span className="caret" aria-hidden="true" />
                                            Report a Hazardous Condition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/outages/streetlight">
                                            <span className="caret" aria-hidden="true" />
                                            Report Streetlight Outage
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/outages/tree-trimming">
                                            <span className="caret" aria-hidden="true" />
                                            Request Tree Trimming
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/outages/theft">
                                            <span className="caret" aria-hidden="true" />
                                            Report Utility Theft
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-children">
                                <Link href="/myouc/rebates">
                                    <span className="ico rebates" aria-hidden="true" />
                                    Rebates &amp; Ways to Save
                                </Link>
                                <ul className="sub-nav">
                                    <li className="active">
                                        <Link href="/myouc/rebates/incentives">
                                            <span className="caret" aria-hidden="true" />
                                            Rebates &amp; Incentives
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-children">
                                <Link href="/myouc/alerts">
                                    <span className="ico alerts" aria-hidden="true" />
                                    Alerts
                                </Link>
                                <ul className="sub-nav">
                                    <li>
                                        <Link href="/myouc/alerts/preferences">
                                            <span className="caret" aria-hidden="true" />
                                            Manage Preferences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/myouc/alerts/about">
                                            <span className="caret" aria-hidden="true" />
                                            About Alerts
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <section className="content" id="main_content_container">
                        <div className="account-summary-heading">
                            <h2>Account Summary</h2>

                            <div className="account-select">
                                <em>Account Number:</em>{" "}
                                <span className="single-account">{accountNumber}</span>
                            </div>
                        </div>

                        <div className="leading row">
                            {/* MAIN COLUMN (8) */}
                            <div className="eight columns gutter-right ouc-dashboard-main">
                                <div className="module" id="prepaid-module">
                  <span className="title">
                    <strong>OUC Power Pass Summary</strong>{" "}
                      <span className="module-date">02/27/2026</span>
                    <span className="prepaid-status float-right">Active</span>
                  </span>

                                    <div className="row inner">
                                        <div className="main gutter-right">
                                            <span className="float-left">Account Balance</span>
                                            <span className="float-right text-right">
                        <strong>$63.28</strong>
                      </span>
                                            <div className="cf" />
                                        </div>

                                        <div className="side">
                                            <p className="leading-mobile">
                                                <Link
                                                    href="/myouc/billing"
                                                    className="btn btn-green btn-large btn-caps btn-fluid btn--no-arrow"
                                                >
                                                    Make Payment
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row inner">
                                        <div className="main">
                                            <div className="prepaid-left">
                                                <div className="prepaid-img" aria-hidden="true" />
                                                <p className="prepaid-txt">
                                                    Through the OUC Power Pass Portal you can check your
                                                    usage, manage your alerts, check your payment history
                                                    and more.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="side">
                                            <p className="leading-mobile">
                                                <button className="btn btn-blue btn-large btn-caps btn-fluid btn--no-arrow">
                                                    View Usage
                                                </button>
                                            </p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row inner">
                                        <div className="side">
                                            <div className="vertical-button-group">
                                                <Link
                                                    href="/myouc/billing/payment-history"
                                                    className="btn btn-gray btn-small btn-fluid btn--no-arrow"
                                                >
                                                    Payment History
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row inner last-two">
                                        <div className="main enrollments first">Last Payment Amount</div>
                                        <div className="side text-right">$ 60.00</div>

                                        <div className="main enrollments first">Last Payment Received</div>
                                        <div className="side text-right">02/05/2026</div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN (4) */}
                            <div className="four columns">
                                <div className="module ouc-dashboard-info">
                  <span className="title">
                    <strong>My Info</strong>
                    <Link href="/myouc/my-info" className="helper-link">
                      Edit Info
                    </Link>
                  </span>

                                    <p>
                                        <strong>Customer Name</strong>
                                        <br />
                                        {customerName}
                                    </p>

                                    <p>
                                        <strong>Mailing &amp; Billing Address</strong>
                                        <br />
                                        {addressLines.map((l) => (
                                            <span key={l}>
                        {l}
                                                <br />
                      </span>
                                        ))}
                                        <Link href="/myouc/my-info">Update</Link>
                                    </p>

                                    <p>
                                        <strong>Email Address</strong>
                                        <br />
                                        {email}
                                        <br />
                                        <Link href="/myouc/my-info">Update</Link>
                                    </p>

                                    <p>
                                        <strong>Phone Numbers</strong>
                                        <br />
                                        <span className="smallcaps">primary</span> {phone}
                                        <br />
                                        <Link href="/myouc/my-info">Update</Link>
                                    </p>

                                    <p>
                                        <strong>Password</strong>
                                        <br />
                                        <span className="pw-dots" aria-hidden="true">
                      ••••••••
                    </span>
                                        <br />
                                        <Link href="/myouc/my-info/password">Update</Link>
                                    </p>
                                </div>
                            </div>

                            {/* ALERTS MODULE BELOW (like the original) */}
                            <div className="leading four columns alerts-col">
                                <div className="module ouc-dashboard-info">
                  <span className="title">
                    <strong>ALERT ENROLLMENT</strong>
                  </span>

                                    <p>
                                        <strong>Outage Enrollment Status</strong>
                                        <br />
                                        Preferences not set
                                    </p>
                                    <p>
                                        <Link href="/myouc/alerts/preferences">
                                            Set Alert Preferences
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="ouc-dashboard-edit-info">
                            <Link
                                href="/myouc/my-info"
                                className="btn btn-large btn-blue btn-fluid btn--no-arrow"
                            >
                                Edit Info
                            </Link>
                        </p>
                    </section>
                </div>
            </div>

            {/* Component-scoped styling */}
            <style jsx>{`
        /* ===== Layout skeleton matching the original "container / row / columns" ===== */
        .myouc-wrap {
          padding: 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .row {
          display: flex;
          align-items: flex-start;
        }

        /* Sidebar */
        .sidebar {
          width: 280px;
          flex: 0 0 280px;
          border-right: 1px solid #e6e6e6;
          padding: 24px 0;
          margin-right: 24px;
        }
        .nav {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav > li {
          border-bottom: 1px solid #efefef;
        }
        .nav > li > :global(a) {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 12px 18px;
          color: #4b5563;
          text-decoration: none;
          font-size: 16px;
          line-height: 1.2;
        }
        .nav > li.active > :global(a) {
          color: #f59e0b; /* orange-ish like original highlight */
          position: relative;
        }
        .nav > li.active > :global(a)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: #f59e0b;
        }
        .has-children .sub-nav {
          list-style: none;
          margin: 0;
          padding: 0 0 10px 0;
          display: block;
        }
        .sub-nav > li > :global(a) {
          display: block;
          padding: 8px 18px 8px 44px;
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
        }

        /* Simple icons placeholders (so spacing matches) */
        .ico {
          width: 18px;
          height: 18px;
          border-radius: 3px;
          background: #d1d5db;
          flex: 0 0 18px;
        }
        .caret {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-right: 2px solid #9ca3af;
          border-bottom: 2px solid #9ca3af;
          transform: rotate(-45deg);
          margin-right: 8px;
          translate: 0 -1px;
        }

        /* Content */
        .content {
          flex: 1;
          padding: 24px 0;
        }
        .account-summary-heading {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 18px;
        }
        .account-summary-heading h2 {
          margin: 0;
          font-size: 56px; /* matches the big title feel */
          font-weight: 500;
          color: #0b5ea8;
          letter-spacing: 0.2px;
        }
        .account-select {
          font-size: 18px;
          color: #111827;
          white-space: nowrap;
        }
        .account-select em {
          font-style: normal;
          font-weight: 600;
          margin-right: 8px;
        }

        /* Columns inside content */
        .leading.row {
          gap: 24px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .eight.columns {
          flex: 0 0 calc((100% - 24px) * 0.66);
          min-width: 520px;
        }
        .four.columns {
          flex: 0 0 calc((100% - 24px) * 0.34);
          min-width: 320px;
        }
        .alerts-col {
          margin-left: auto; /* makes it sit under the right column like original */
        }

        /* Module cards */
        .module {
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background: #fff;
          overflow: hidden;
        }
        .module .title {
          display: block;
          padding: 14px 16px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 16px;
          color: #111827;
        }
        .helper-link {
          float: right;
          font-weight: 500;
          color: #2563eb;
          text-decoration: underline;
        }
        .module-date {
          margin-left: 10px;
          font-weight: 500;
          color: #111827;
          font-size: 14px;
        }
        .prepaid-status {
          color: #16a34a;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
        }
        hr {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 0;
        }

        /* Inner rows in prepaid module */
        .inner {
          padding: 14px 16px;
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .inner .main {
          flex: 1;
        }
        .inner .side {
          width: 240px;
          flex: 0 0 240px;
          display: flex;
          justify-content: flex-end;
        }
        .float-left {
          float: left;
        }
        .float-right {
          float: right;
        }
        .text-right {
          text-align: right;
        }
        .cf {
          clear: both;
        }

        .prepaid-left {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .prepaid-img {
          width: 120px;
          height: 60px;
          border-radius: 3px;
          background: #e5e7eb;
          flex: 0 0 120px;
        }
        .prepaid-txt {
          margin: 0;
          color: #374151;
          font-size: 16px;
          line-height: 1.4;
          max-width: 520px;
        }

        /* Buttons (approximate original look) */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 22px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .btn-fluid {
          width: 100%;
        }
        .btn-large {
          padding: 16px 22px;
        }
        .btn-small {
          padding: 12px 18px;
          font-size: 13px;
        }
        .btn-green {
          background: #2e7d32;
          color: #fff;
        }
        .btn-blue {
          background: #0b5ea8;
          color: #fff;
        }
        .btn-gray {
          background: #0b5ea8; /* original shows a blue pill for Payment History */
          color: #fff;
        }

        .vertical-button-group {
          width: 100%;
        }

        .ouc-dashboard-info {
          padding: 0;
        }
        .ouc-dashboard-info p {
          margin: 0;
          padding: 12px 16px;
          border-top: 1px solid #eef2f7;
          font-size: 16px;
          color: #111827;
        }
        .ouc-dashboard-info p:first-of-type {
          border-top: none;
        }
        .smallcaps {
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-size: 12px;
          color: #374151;
          margin-right: 6px;
        }
        .pw-dots {
          display: inline-block;
          letter-spacing: 2px;
        }

        .ouc-dashboard-edit-info {
          display: none; /* only mobile in the original */
          margin-top: 20px;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .row {
            gap: 18px;
          }
          .sidebar {
            width: 260px;
            flex-basis: 260px;
            margin-right: 0;
          }
          .account-summary-heading h2 {
            font-size: 44px;
          }
        }
        @media (max-width: 900px) {
          .row {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            flex: 0 0 auto;
            border-right: none;
            border-bottom: 1px solid #e6e6e6;
            margin-right: 0;
            padding: 12px 0;
          }
          .content {
            padding-top: 16px;
          }
          .leading.row {
            flex-direction: column;
          }
          .eight.columns,
          .four.columns {
            flex: 1 1 auto;
            min-width: 0;
          }
          .alerts-col {
            margin-left: 0;
          }
          .inner {
            flex-direction: column;
            align-items: stretch;
          }
          .inner .side {
            width: 100%;
            flex-basis: auto;
          }
          .ouc-dashboard-edit-info {
            display: block;
          }
        }
      `}</style>
        </main>
    );
}