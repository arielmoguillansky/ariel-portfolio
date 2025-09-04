import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${roboto.className} container-grid lg:h-screen w-screen`}>
      <div className="top" />
      <div className="hidden header lg:flex justify-between p-4 items-center">
        <div>
          <span>Ariel Moguillansky</span>
        </div>
        <div className="flex gap-x-4">
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="lg:hidden header flex justify-end p-4 items-center">
        X
      </div>
      <div className="body">
        <div className="max-w-3/4 text-right text-[60px]">
          <p className={`${roboto.className}`}>Hello, my name is Ariel.</p>
          <p className={`${roboto.className}`}>
            I{" "}
            <span className="line-through text-[#d7d7d7]">
              &apos;m a developer
            </span>{" "}
            <span className="text-red-500">do cool stuff</span> on the web.
          </p>
        </div>
      </div>
      <div className="left-pad" />
      <div className="right-pad" />
      <div className="bottom" />
      <div className="bottom-belt" />
      <div className="bottom-belt-content" />
      <div className="bottom-belt-end" />
      <div className="left-belt" />
      <div className="right-belt" />
      <div className="footer">FOOTER</div>
    </div>
  );
}
