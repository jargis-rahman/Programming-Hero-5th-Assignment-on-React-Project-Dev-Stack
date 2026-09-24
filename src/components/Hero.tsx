import heroImg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section className='container mx-auto items-center justify-between flex py-12'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Build Your Ideal<br />
                    <span className='bg-gradient-text bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='text-brand-gray'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className='flex gap-4'>
                    <button className='bg-gradient-btn text-page px-6 py-3 rounded-full'>Explore Technologies</button>
                    <button className='border border-border px-6 py-3 rounded-full'>Learn More</button>
                </div>
            </div>
            <img src={heroImg} alt="" />
        </section>
    );
};

export default Hero;