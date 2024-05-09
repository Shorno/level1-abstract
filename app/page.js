import Navbar from "@/components/navbar";
import HeroSearch from "@/components/hero-search";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar/>
            <HeroSearch/>
            <Features/>
            <Footer/>
        </main>
    );
}
