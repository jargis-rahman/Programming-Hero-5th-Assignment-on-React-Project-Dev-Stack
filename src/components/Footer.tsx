import logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <section className='mt-20 py-10 border-t border-gray-100'>
            <div className="container mx-auto flex justify-between">
                <div className=''>
                    <img src={logo} alt="DevStack" />
                    <p className='text-brand-gray my-4'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className='flex gap-4 font-semibold text-brand-dark'>
                        <li><a href="">Github</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>

                <div >
                    <h3 className="font-semibold mb-4">PRODUCT</h3>
                    <ul className="flex flex-col gap-2 text-brand-gray">
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">COMPANY</h3>
                    <ul className="flex flex-col gap-2 text-brand-gray">
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">LEGAL</h3>
                    <ul className="flex flex-col gap-2 text-brand-gray">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className='container flex mx-auto justify-between py-4 mt-10 border-t border-gray-100'>
                <p className="text-brand-gray">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-5 text-brand-gray">
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;