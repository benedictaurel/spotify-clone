import { useState, useEffect } from "react";
import SpotifyLight from "../assets/spotifyLight.svg";
import SpotifyDark from "../assets/spotifyDark.svg";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`z-20 fixed left-0 -top-5 max-sm:top-0 nav w-full overscroll-none transition-all duration-300 ease-in-out  ${
                isScrolled ? "bg-white text-black" : "bg-transparent text-white"
            }`}
        >
            <nav className="flex items-center justify-center px-6">
                <div className="flex justify-between items-center w-full">
                    <button
                        className={`flex items-center gap-2 rounded-full px-8 py-2 max-sm:px-2 mt-5 ${
                            isScrolled ? "bg-black text-white" : "bg-white text-black"
                        }`}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="font-bold max-sm:hidden">Home</span>
                    </button>
                    <img
                        src={isScrolled ? SpotifyDark : SpotifyLight}
                        alt="Spotify Logo"
                        className="w-[152px] max-sm:w-[117px]"
                    />
                    <div
                        className={`flex items-center rounded-full border-2 px-8 py-2 max-sm:px-2 mt-5 ${
                            isScrolled ? "border-black text-black" : "border-white text-white"
                        }`}
                    >
                        <Search className="mr-2 max-sm:mr-0 h-5 w-5" />
                        <span className="font-bold max-sm:hidden">Search</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}