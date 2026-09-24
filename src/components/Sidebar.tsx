import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../types";


interface technologyProps {
    addStack: Technology[];
    setAddStack: Dispatch<SetStateAction<Technology[]>>;
}

const Sidebar = ({ addStack, setAddStack }: technologyProps) => {
    return (

        <div className="flex flex-col gap-2 border border-border rounded-2xl p-4 h-fit">
            <h1 className="text-2xl font-bold">Your Stack</h1>
            {addStack.length === 0 ? (<p className="text-brand-gray mb-2">No technologies selected yet.</p>) : (<p className="text-brand-gray mb-2">{addStack.length} Technology Selected</p>)}
            <div className="flex-1 flex items-center justify-center">

                {addStack.length === 0 ? (
                    <div className="text-brand-gray px-18 py-8 border border-dashed border-gray-300 rounded-2xl">
                        <p>Your stack is empty</p>
                    </div>
                ) : (<div>
                    {addStack.map((technology) => (
                        <div key={technology.id} className="flex justify-between items-center gap-5 py-4  px-10 border border-border rounded-2xl my-2">
                            <img src={technology.icon} alt="Technology" className="w-[70px] h-[70px]" />
                            <div>
                                <p className="font-bold text-xl">{technology.name}</p>
                                <p className="text-brand-gray">{technology.category}</p>

                            </div>
                            <button
                                onClick={() => setAddStack(addStack.filter((tech) => tech.id !== technology.id))}
                                className="text-6xl text-brand-gray font-light cursor-pointer">×</button>

                        </div>
                    ))}
                    <button
                        onClick={() => setAddStack([])}
                        className="w-full  text-red-500 text-2xl font-semibold cursor-pointer py-4 px-10 border border-red-500 rounded-2xl mt-8 mb-2">Remove All</button>
                </div>)

                }
            </div>
        </div>
    );
};

export default Sidebar;