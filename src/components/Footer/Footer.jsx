import Logo from "../../assets/images/logo.svg"
export const Footer = () => {
  return (
    <footer className="bg-Footer flex flex-col items-center md:items-start justify-center md:justify-around gap-5 rounded-borderRadiusMobileFooter md:flex-row w-full py-10 rounded-borderRadiusFooter">
        <div>
            <img src={Logo} alt="" />
        </div>
        

        <div className="flex flex-col text-center md:text-start bg-Footer">
            <a href="#" className="text-white font-bold mb-5">Product</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Overview</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Princing</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Features</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Integrations</a>
        </div>

        <div className="flex flex-col text-center md:text-start">
            <a href="#" className="text-white font-bold mb-5">Company</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">About</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Team</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Careers</a>
        </div>

        <div className="flex flex-col text-center md:text-start">
            <a href="#" className="text-white font-bold mb-5">Connect</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Newsletter</a>
            <a href="#" className="text-colorVeryDark font-medium hover:text-white transition-colors">Linkedln</a>
        </div>
    </footer>
  )
}
