import Hero from "./components/Hero"
import MainLayout from "./components/MainLayout"
import Navbar from "./components/Navbar"

import { Suspense, useState } from "react";
import type { Technology } from "../types";
import TechList from "./components/TechList";
import Sidebar from "./components/Sidebar";

const fetchTechnology = async (): Promise<Technology> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
}

const technologyPromise = fetchTechnology();


function App() {

const [addStack,setAddStack] = useState<Technology[]>([]);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <main>
            <section className="container mx-auto flex flex-col gap-2">
                <h1 className='text-4xl font-bold'>Explore the <span className="text-brand-pink">Technologies</span> </h1>
                <p className="text-brand-gray">Pick one technology per category to build your ideal stack.</p>
                <div className="grid grid-cols-4 mt-6 gap-5">
                    <Suspense fallback={<div>Loading...</div>}>
                        <TechList technologyPromise={technologyPromise} addStack={addStack} setAddStack={setAddStack}></TechList>
                        <Sidebar addStack={addStack} setAddStack={setAddStack}></Sidebar>
                    </Suspense>
                </div>
            </section>
        </main>
      

    </>
  )
}

export default App
