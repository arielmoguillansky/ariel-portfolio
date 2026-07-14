import Image from "next/image";
import { Frame } from "@/components/Frame";
import { ProjectIndex } from "@/components/ProjectIndex";

export default function Projects() {
  return (
    <Frame
      active="/projects"
      footer={
        <>
          <div className="marquee__item">PROJECTS</div>
          <div className="marquee__item">
            <Image src="/code.svg" alt="" width={32} height={32} />
          </div>
          <div className="marquee__item">SELECTED WORK</div>
          <div className="marquee__item">
            <Image src="/cube.svg" alt="" width={32} height={32} />
          </div>
        </>
      }
    >
      <ProjectIndex />
    </Frame>
  );
}
