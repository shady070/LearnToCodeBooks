'use client'
import { useState, useEffect } from "react";
import Exercises from "@/components/Exercises";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Quiz from "@/components/Quiz";
import Notes from "@/components/Notes";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#12151C] px-[30px] md:px-[95px]">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Hero />
          <Notes />
          <Exercises />
          <Quiz />
          <Projects />
        </>
      )}
    </main>
  );
}
