import { Suspense } from "react";
import MyInfoClient from "./MyInfoClient";

export default function Page() {
    return (
        <Suspense fallback={<div className="myouc-container">Loading…</div>}>
            <MyInfoClient />
        </Suspense>
    );
}