import LineStroke from "../assets/Line.svg";
import dotstyle from "../assets/Dots.png";
import rectStyle from "../assets/Rectangle24.svg";
import styleOutline from "../assets/StyleOutline.svg";
export default function Skills() {
  function SkillCategory({ title, skills, className = "" }) {
    return (
      <div
        className={`py-2 border border-solid  border-[color:var(--gray,#ABB2BF)] ${className}`}
      >
        <h3 className="px-2 w-full font-semibold text-white whitespace-nowrap">
          {title}
        </h3>
        <div className="mt-2 w-full bg-gray-400 border border-gray-400 border-solid min-h-px"></div>
        <div className="flex flex-col px-2 mt-2 text-gray-400">
          {skills.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-2 items-start ${
                rowIndex > 0 ? "mt-2" : ""
              } ${Array.isArray(row) && row.length === 1 ? "self-start" : ""}`}
            >
              {Array.isArray(row) ? (
                row.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))
              ) : (
                <span>{row}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-body text-gray">
  <div className="flex flex-wrap xl:justify-center xl:items-center items-center gap-4">
    <h2 className="text-headingSecondary font-semibold">
      <span className="text-primary">#</span>Skills
    </h2>
    <img src={LineStroke} alt="line" />
  </div>

  <section className="skills my-12">
    <div className="flex max-md:flex-col">
      {/* Left Graphic Area */}
      <div className="w-2/5 relative max-md:ml-0 max-md:w-full min-h-[20rem]">
        {/* Top Left */}
        <div className="absolute top-[11.2rem] left-[18.8rem] max-md:hidden">
          <img className="w-[6.3rem] h-[6.3rem]" src={dotstyle} />
        </div>

        {/* Top Right */}
        <div className="absolute top-[1.2rem] right-[4.6rem] max-md:hidden">
          <img src={rectStyle} />
        </div>

        {/* Bottom Left */}
        <div className="absolute top-[2rem] left-[0.7rem] max-md:hidden">
          <img className="w-[6.3rem] h-[6.3rem]" src={dotstyle} />
        </div>

        {/* Bottom Right */}
        <div className="absolute w-[5.2rem] h-[5.2rem] bottom-0 right-[5rem] max-md:hidden">
          <img src={rectStyle} />
        </div>

        {/* Center */}
        <div className="absolute bottom-0 items-center left-[2.5rem]">
          <img className="w-[11.3rem] h-[11.3rem]" src={styleOutline} />
        </div>
      </div>

      {/* Right Skills Content */}
      <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
        <div className="grow mt-20 max-md:mt-10 max-md:max-w-full mb-4">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left Column */}
            <div className="w-[65%] max-md:w-full">
              <div className="flex flex-col w-full text-base whitespace-nowrap">
                <div className="flex gap-4 max-md:flex-col">
                  <SkillCategory
                    title="Languages"
                    skills={[["JavaScript++", "Lua"], ["C++"]]}
                  />
                  <SkillCategory
                    title="Databases"
                    skills={[["SQLite", "PostgreSQL"], ["Mongo"]]}
                  />
                </div>

                {/* Other */}
                <div className="self-start mt-6 border border-gray w-full p-2">
                  <h3 className="font-semibold text-white">Other</h3>
                  <div className="mt-2 w-full border border-gray-400 min-h-px bg-gray-400"></div>
                  <div className="flex flex-col mt-2 text-gray-400 gap-2">
                    <div className="flex flex-wrap gap-2">
                      <span>HTML</span>
                      <span>CSS</span>
                     
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span>REST</span>
                      <span>Jinja</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[35%] max-md:w-full">
              <div className="text-base">
                <SkillCategory
                  title="Tools"
                  skills={[
                    ["VSCode", "Arch Linux"],
                    ["Figma", "Git"],
                    ["Font Awesome"],
                  ]}
                />
                <SkillCategory
                  title="Frameworks"
                  skills={[
                    ["React", "Vue"],
                    ["Phaserjs", "web Game Development"],
                    [ "Express.js"],
                  ]}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
