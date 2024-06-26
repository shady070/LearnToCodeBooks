import Exercises from "@/components/Exercises";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Quiz from "@/components/Quiz";
import Notes from "../components/Notes";

export default function Home() {
  return (
    <main className="bg-black px-[30px] md:px-[95px]">
     <Hero />
     <Notes />
     <Exercises />
     <Quiz />
     <Projects />
    </main>
  );
}
