import {HeroOUC} from "@/components/ouc/HeroOUC";
import {LoginSplit} from "@/components/ouc/LoginSplit";
import {TwoInfoCards} from "@/components/ouc/TwoInfoCards";
import {CareersBanner} from "@/components/ouc/CareersBanner";
import {ProgramsCarousel} from "@/components/ouc/ProgramsCarousel";
import {NewsTiles} from "@/components/ouc/NewsTiles";

export default function Page() {
    return (
        <>
            <HeroOUC/>
            <LoginSplit/>
            <TwoInfoCards/>
            <CareersBanner/>
            <ProgramsCarousel/>
            <NewsTiles/>
        </>
    );
}