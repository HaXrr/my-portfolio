import projectGame from "../assets/projects/2Dgame.png"
import projectDinamicCards from '../assets/projects/dinamicCard.png'
import projectExpandingCard from '../assets/projects/expanding.png'
import projectRotatingMenu from '../assets/projects/RotatingMenu.png'

export const projects = [
        {
          id: 1,
          img: projectGame,
          stacks: ['PhaserJS', 'JavaScript'],
          title: "2D Game",
          description: "A 2D character roming around picking randomly generated stars.",
        },
        {
          id: 2,
          img: projectDinamicCards,
          stacks: ['React', 'TailwindCSS', 'JS'],
          title: "Dynamic Cards",
          description: "Dynamically pagination with status bar and Dynamic Card changeling.",
        },
        {
          id: 3,
          img: projectExpandingCard,
          stacks: ['React', 'TailwindCSS', 'JS'],
          title: "Expanding Card",
          description: "expanding card of AAA title games with transition effect.",
        },
        {
          id: 4,
          img: projectRotatingMenu,
          stacks: ['React', 'TailwindCSS', 'JS'],
          title: "Rotating Menu",
          description: "Rotation of Page with triggering menu.",
        }
      ];
