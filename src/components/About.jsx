import LineStroke from '../assets/Line.svg'
import heroImg from '../assets/Hero.png'
import Button from '../ui/Button'
export default function About (){
    return(
        <section className=" mt-[1.6rem] md:mt-[11.2rem]  max-w-[1025px] text-gray mb-[9.6rem]">
      <header className=" max-md:mb-10 max-sm:mb-8">
        <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-headingSecondary font-semibold">
              <span className="text-primary">#</span>about me
            </h2>
            <img src={LineStroke} alt="line" />
          </div>
      </header>

      <article className="flex justify-between items-center max-md:gap-10 max-sm:flex-col h-[34.2rem] mt-10 max-sm:gap-8">
        <div className="max-w-[515px] max-sm:max-w-full">
          <p className="mb-7 text-base text-body leading-9 text-gray-400 whitespace-pre-line max-sm:text-sm max-sm:leading-6 flex flex-col gap-10">
            <span>Hello, i'm <span className='text-white'>Hazrat Abu Bakar!</span></span> 
            <span>
            I'm a self-taught front-end developer based in
            SWAT, Pakitan. I can develop responsive websites from scratch and
            raise them into modern user-friendly web experiences.
            </span>
            <span>
            Transforming
            my creativity and knowledge into a websites has been my passion for
            over a year. I have been building UI interfaces to establish their
            presence online. I always strive to learn about the newest
            technologies and frameworks.
            </span>
          </p>
          <Button Btn={"Read more"} />
        </div>

        <div className='hidden md:block'>
        <img
          src={heroImg}
          alt="Developer illustration"
          className="object-contain h-[50.8rem] w-[28.3rem] max-sm:w-full max-sm:h-auto"
        />
        </div>
      </article>
    </section>
    )
}