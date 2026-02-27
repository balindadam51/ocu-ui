import "./myouc.css";
import React from "react";
import {HeaderOUC} from "@/components/ouc/HeaderOUC";
import {FooterOUC} from "@/components/ouc/FooterOUC";

export default function MyOucLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="myouc-scope">
            <HeaderOUC />
            <main className="myouc-main">{children}</main>
            <FooterOUC />
        </div>
    );
}