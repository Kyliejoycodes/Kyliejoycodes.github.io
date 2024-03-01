import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
//to access assets for balls
import {technologies} from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        //technology
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");