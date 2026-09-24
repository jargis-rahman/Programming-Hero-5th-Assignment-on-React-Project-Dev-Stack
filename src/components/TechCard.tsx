import { useState, type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types";
import { toast } from "react-toastify";

interface technologyProps {
  technology: Technology;
  addStack: Technology[];
  setAddStack: Dispatch<SetStateAction<Technology[]>>;
}

const TechCard = ({ technology, addStack, setAddStack }: technologyProps) => {

  const [isAdded, setIsAdded] = useState(false);
  const handleAdd = () => {
    setIsAdded(true);
    setAddStack([...addStack, technology]);
    toast.success("Technology Added Successfully")
  }
  return (
    <div className="flex flex-col gap-4 border border-border rounded-2xl p-8 ">
      <div className="flex items-center justify-between">
        <img src={technology.icon} alt="Technology" className="w-[50px] h-[50px]" />
        <span className="px-4 py-2 border border-gray-200 rounded-full">{technology.badge}</span>
      </div>
      <h2 className="font-bold text-2xl">{technology.name}</h2>
      <p className="text-brand-gray">{technology.description}</p>
      <div className="flex justify-between text-brand-gray font-semibold">
        <p className="px-4 py-2 bg-gray-100 rounded-full">{technology.category}</p>
        <p className="py-2">{technology.difficulty}</p>
        <p className="py-2"><span className='text-yellow-400'>★</span>{technology.rating}</p>
      </div>

      <button
        onClick={handleAdd}
        className={`bg-brand-dark text-page px-6 py-3 rounded-full mt-4 ${isAdded ? "bg-gray-400" : "bg-brand-dark cursor-pointer"}`}
        disabled={isAdded}
      >
        {isAdded ? "Added" : "Add to Stack"}

      </button>
    </div>
  )
};

export default TechCard;