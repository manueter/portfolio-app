import { Project } from "../types/types.ts";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Virtual Clock",
    description:
      "Time control web app to keep track of activities and personal assistence",
    type: "software",
    skills: ["React", "Typescript", "NodeJS"],
    image: "./imgs/projects/software/time-control-screen-2.png",
    link: "https://manueter.github.io/time-control-app",
  },

  {
    id: 2,
    title: "Pedal Audio Effects",
    description:
      "Built 2 pedals audio effects: Distortion and Tremolo to use with musical instruments",
    type: "hardware",
    skills: ["Circuits", "Analogic", "Soldering"],
    image: "./imgs/projects/hardware/guitar-pedals.png",
    link: "",
  },
  {
    id: 3,
    title: "White Noise Synth",
    description:
      "Created a white noise sequencer inside a cassette enclosure, using transistor logic.",
    type: "hardware",
    skills: ["Analogic", "Transistors", "Soldering"],
    image: "./imgs/projects/hardware/white-noise-screen.jpg",
    link: "",
  },
  {
    id: 4,
    title: "Power supply DC",
    description: "Power supply with a range of 3v to 21v and 3watts",
    type: "hardware",
    skills: ["Circuits", "Analogic", "Soldering"],
    image: "./imgs/projects/hardware/power-supply.jpeg",
    link: "",
  },
    {
    id: 5,
    title: "File Combiner App",
    description: "A Python-based desktop application for combining text files.",
    type: "software",
    skills: ["Python"],
    image: "./imgs/projects/software/filecombiner_screen.png",
    link: "https://github.com/manueter/filecombiner-py-app/releases",
  },
];
