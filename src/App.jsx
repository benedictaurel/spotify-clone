import "./App.css";
import Navbar from "./components/navbar";
import {
  Music,
  Headphones,
  Radio,
  ListMusic,
  Heart,
  Download,
  Smartphone,
  Laptop,
  Speaker,
  Check,
} from "lucide-react";

import Background from "./assets/background.webp";
import HowToConnect from "./components/connect";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="bg-landing bg-[image:var(--image-url)] w-full h-screen bg-cover bg-no-repeat bg-fixed bg-left-top flex items-center gap-20"
        style={{
          "--image-url": `url(${Background})`,
        }}
      >
        <div className="relative z-10 flex flex-col justify-center p-6 md:p-12 text-white">
          <div className="mt-12 md:mt-24 lg:mt-32 mx-auto text-center md:text-left ml-4">
            <h1 className="max-lg:text-6xl font-bold leading-tight lg:text-8xl font-SpotifyMix max-sm:text-4xl">
              Spotify for Everyone.
            </h1>
            <p className="mt-6 md:text-2xl font-SpotifyMix max-lg:text-lg max-lg:mt-3 max-sm:text-sm">
              Millions of songs. No credit card needed.
            </p>
            <a
              href="#why"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-green-500 transition ease-in-out duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <section id="why" className="py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-SpotifyMix">Choose Spotify</h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
                Spotify is a digital music service that gives you access to millions of songs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-black p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                <Music className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Millions of songs</h3>
              <p className="text-black">
                There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect
                collection.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-black p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                <Headphones className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">HD Music</h3>
              <p className="text-black">
                Listen to music as if you were at a live concert with high-definition audio quality.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-black p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                <Radio className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Stream Everywhere</h3>
              <p className="text-black">
                Stream music on your smartphone, tablet, computer, or smart TV without paying for each song.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="py-12 md:py-24 bg-white flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <HowToConnect />
        </div>
      </section>

      <section id="premium" className="py-12 md:py-24 bg-white flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-SpotifyMix">
                Pick your Premium
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed mx-auto">
                Listen without limits on your phone, speaker, and other devices.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 text-white">
            <div className="flex flex-col rounded-lg bg-zinc-950 p-6 min-h-[348px]">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Individual</h3>
                <p className="text-zinc-400">Rp50.000/month</p>
                <p className="text-zinc-400">1 account</p>
              </div>
              <ul className="mb-6 space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">1 Premium account</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ad-free music listening</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Play anywhere - even offline</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">On-demand playback</span>
                </li>
              </ul>
              <button className="bg-white text-black hover:bg-green-500 transition ease-in-out duration-300 rounded-full py-2 font-semibold">
                Get Started
              </button>
            </div>
            <div className="flex flex-col rounded-lg bg-zinc-950 p-6 min-h-[348px]">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Duo</h3>
                <p className="text-zinc-400">Rp75.000/month</p>
                <p className="text-zinc-400">2 accounts</p>
              </div>
              <ul className="mb-6 space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">
                    2 Premium accounts for a couple
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ad-free music listening</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Play anywhere - even offline</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">On-demand playback</span>
                </li>
              </ul>
              <button className="bg-white text-black hover:bg-green-500 transition ease-in-out duration-300 rounded-full py-2 font-semibold">
                Get Started
              </button>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-black bg-zinc-950 p-6 min-h-[348px]">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Family</h3>
                <p className="text-zinc-400">Rp150.000/month</p>
                <p className="text-zinc-400">Up to 6 accounts</p>
              </div>
              <ul className="mb-6 space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">6 Premium accounts for family</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Block explicit music</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ad-free music listening</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Play anywhere - even offline</span>
                </li>
              </ul>
              <button className="bg-white text-black hover:bg-green-500 transition ease-in-out duration-300 rounded-full py-2 font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="everywhere" className="py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-SpotifyMix">
                One account, listen everywhere
              </h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
                Listen on your speakers, TV, and other favorite devices.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Smartphone className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium">Mobile</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Laptop className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium">Computer</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Speaker className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium">Speaker</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h3 className="font-medium">TV</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-12 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-SpotifyMix">Ready to start listening?</h2>
              <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed">
                Download Spotify for free and start listening now.
              </p>
            </div>
            <a href="https://www.spotify.com/id-id/download/windows/" target="_blank" className="bg-black text-white hover:bg-green-500 transition ease-in-out duration-300 rounded-full px-6 py-4 text-lg font-bold">
              Get Spotify Free
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
