import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <nav className='  border-b border-gray-100 py-6'>
            <div className='container mx-auto flex items-center justify-between'>

                
                    <a href=""><img src={logo} alt="DevStack" /></a>
                
                <div className='flex items-center'>
                    <ul className='flex gap-4'>
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