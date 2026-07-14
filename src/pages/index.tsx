import { Frame } from "@/components/Frame";

export default function Home() {
  return (
    <Frame active="/">
      <div className="flex h-full items-end lg:items-center justify-end">
        <div className="font-display max-w-3/4 text-right lg:text-[60px] text-[32px] leading-[1.05]">
          <p>Hello, my name is Ariel.</p>
          <p>
            I{" "}
            <span className="line-through text-[#d7d7d7]">
              &apos;m a developer
            </span>{" "}
            <span className="text-red-500">do cool stuff</span> on the web.
          </p>
        </div>
      </div>
    </Frame>
  );
}
