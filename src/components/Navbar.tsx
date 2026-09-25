import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className=' bg-page border-b border-gray-100 py-6 top-0 z-50 sticky'>
            <div className='container mx-auto flex items-center justify-between'>

               <button className='w-12 h-12 lg:hidden cursor-pointer'><svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                        </svg></button>

                <a href=""><img src={logo} alt="DevStack" /></a>

                <div className='flex items-center'>
                    <ul className='hidden lg:flex gap-4 block'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href=""> Projects </a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
                    <button className='border border-border px-6 py-2 rounded-full'>Sign In</button>
                    <button className='bg-brand-pink text-page px-6 py-2 rounded-full'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;