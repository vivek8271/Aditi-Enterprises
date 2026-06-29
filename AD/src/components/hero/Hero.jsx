import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import BrandLogos from "./BrandLogos";
import QuickQuoteCard from "./QuickQuoteCard";

import "./Hero.css";

export default function Hero() {
    return (
        <section id="home" className="hero">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-7">

                        <HeroContent />

                        <HeroButtons />

                        <BrandLogos />

                    </div>

                    <div className="col-lg-5">

                        <QuickQuoteCard />

                    </div>

                </div>

            </div>

        </section>
    );
}