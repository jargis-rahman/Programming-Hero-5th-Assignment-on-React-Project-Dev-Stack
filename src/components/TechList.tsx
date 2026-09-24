import { use, type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

interface technologyProps {
    technologyPromise: Promise<Technology[]>;
    addStack: Technology[];
    setAddStack: Dispatch<SetStateAction<Technology[]>>;
}

const TechList = ({ technologyPromise, addStack, setAddStack }: technologyProps) => {
    const technologies = use(technologyPromise)
    return <div className="col-span-3 grid grid-cols-3 gap-5">
        {technologies.length === 0 && <p>No technologies found</p>}

        {technologies.map((technology) => (
            <TechCard key={technology.id} technology={technology} addStack={addStack} setAddStack={setAddStack}></TechCard>

        ))}
    </div>
        ;
};

export default TechList;