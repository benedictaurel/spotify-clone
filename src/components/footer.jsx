import React from "react";
import SpotifyLight from "../assets/spotifyLight.svg";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 w-full py-6 md:py-12 bg-black text-white">
      <div className="w-full flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-center sm:text-left sm:items-start items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <img src={SpotifyLight} alt="Spotify Logo" className="w-32" draggable="false" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Company
              </h3>
              <nav className="flex flex-col space-y-2 items-center sm:items-start">
                <div className="text-sm hover:text-green-500 transition-colors">About</div>
                <div className="text-sm hover:text-green-500 transition-colors">Jobs</div>
                <div className="text-sm hover:text-green-500 transition-colors">For the Record</div>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Communities
              </h3>
              <nav className="flex flex-col space-y-2 items-center sm:items-start">
                <div className="text-sm hover:text-green-500 transition-colors">For Artists</div>
                <div className="text-sm hover:text-green-500 transition-colors">Developers</div>
                <div className="text-sm hover:text-green-500 transition-colors">Advertising</div>
                <div className="text-sm hover:text-green-500 transition-colors">Investors</div>
                <div className="text-sm hover:text-green-500 transition-colors">Vendors</div>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Useful Links
              </h3>
              <nav className="flex flex-col space-y-2 items-center sm:items-start">
                <div className="text-sm hover:text-green-500 transition-colors">Support</div>
                <div className="text-sm hover:text-green-500 transition-colors">Web Player</div>
                <div className="text-sm hover:text-green-500 transition-colors">Free Mobile App</div>
              </nav>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/groups/525844029229811/posts/1020091956471680/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-white hover:text-green-500 transition-colors rounded-full" />
                </a>
                <a href="https://www.instagram.com/benedictaurel_/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-white hover:text-green-500 transition-colors" />
                </a>
                <a href="https://x.com/netlab" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-white hover:text-green-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-white h-[1px] mt-4'></div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between items-center text-center sm:text-left">
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <div className="text-xs text-zinc-400 hover:underline">Legal</div>
              <div className="text-xs text-zinc-400 hover:underline">Privacy Center</div>
              <div className="text-xs text-zinc-400 hover:underline">Privacy Policy</div>
              <div className="text-xs text-zinc-400 hover:underline">About Ads</div>
              <div className="text-xs text-zinc-400 hover:underline">Additional CA Privacy Disclosure</div>
              <div className="text-xs text-zinc-400 hover:underline">Cookies</div>
            </div>
            <div className="flex items-center gap-4 justify-center sm:justify-end">
              <p className="text-xs text-zinc-400">Created By Benedict Aurelius</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;