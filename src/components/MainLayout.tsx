import Sidebar from "./Sidebar";
import TechList from "./TechList";

const MainLayout = () => {
    return (
        <main>
            <section className="container mx-auto flex flex-col gap-2">
                <h1 className='text-4xl font-bold'>Explore the <span className="text-brand-pink">Technologies</span> </h1>
                <p className="text-brand-gray">Pick one technology per category to build your ideal stack.</p>
                <div>
                    <TechList></TechList>
                    <Sidebar></Sidebar>
                </div>
            </section>
        </main>
    );
};

export default MainLayout;