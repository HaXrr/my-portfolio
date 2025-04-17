import logo from '/public/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
export default function Header(){

    const NavbarLinks = [
        {
          id: 1,
          link: "./",
          title: "Home",
          description: "Welcome to my portfolio website where you can explore my web development journey, skills, and projects. Get a glimpse of my work and creativity.",
        },
        {
          id: 2,
          link: "./Projects",
          title: "Projects",
          description: "Discover a collection of my web development projects. From interactive web apps to full-stack solutions, explore the projects I’ve worked on throughout my coding journey.",
        },
        {
          id: 3,
          link: "./About",
          title: "About-Me",
          description: "Learn more about me, Hazrat Abu Bakar, a passionate web developer with expertise in front-end technologies, coding skills, and a drive to create impactful digital experiences.",
        },
      ];
      
    return(
        <div className='flex justify-between items-center pt-[3.2rem] pb-[0.8rem] text-body text-white font-semibold mb-compMargin text-gray'>

        <div>
            <a href='/Home' title='my portfolio logo ' className='flex justify-center items-center gap-[0.8rem]'  ><FontAwesomeIcon icon={faLaptopCode}  className='w-[2.6rem] h-[2.6rem] text-primary'  />CodeWithHazrr</a>
        </div>
        <nav>
            <ul className='flex gap-[3.2rem] lowercase  ' >
                {
                    NavbarLinks.map((link)=>{
                        return(
                            <li key={link.id} ><a href={link.link} title={link.description} className='hover:text-primary' ><span className='text-primary'>#</span>{link.title}</a></li>
                        )
                    })
                }
            </ul>
        </nav>

        </div>
    )
}