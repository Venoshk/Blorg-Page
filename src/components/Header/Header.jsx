import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/icon-hamburger.svg"
import Close from "../../assets/images/icon-close.svg"
import MenuLinks from "../MenuLinks/MenuLinks";
import { Buttons } from "../Buttons/Buttons";
import { useState } from "react";
export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)


    const handleSidebar = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className="flex justify-center items-center flex-col text-colorWhile bg-Header">

        
        <div className="content w-3/4 flex items-center">
            <div className="flex flex-row-reverse items-center justify-between">
                <button onClick={handleSidebar} className="absolute top-5 right-5"><img src={isOpen ? Close : Menu} alt="" className="flex md:hidden"/></button>
                <img src={Logo} alt="" />
            </div>
           
            <nav className={` flex w-full items-center justify-between py-10 px-10 gap-20 md:flex ${isOpen ? 'openSidebar' : ''}`}>
                

                <div className="menu  flex gap-4">
                    <MenuLinks title={'Products'} />
                    <MenuLinks title={'Company'} />
                    <MenuLinks title={'Connect'} linkOne={'Contact'} linkTwo={'Newsletter'} linkTree={'Linkedln'}/>
                </div>
                
                <div className="btns flex gap-10 ">
                    <Buttons value={'Login'} className={'font-bold'}/>
                    <Buttons value={'Sing up'} className={'transition-all border-none py-2 px-10 text-colorBtn bg-white rounded-full outline-none font-bold text-nowrap hover:bg-Hover hover:text-colorWhile'}/>
                </div>
                
            </nav>
        </div>
       

        <div className="content w-full h-full flex flex-col justify-center items-center py-24 ">
            <h1 className="text-5xl font-medium mb-5">A mordern publishing platform</h1>
            <p className="mb-10 text-colorWhile">Grow your audience and build your online brand</p>

            <div className="btns flex flex-row-reverse gap-10 w-full justify-center ">
                <Buttons value={'Learn More'} className={'font-bold border py-2 px-10 rounded-full hover:bg-white hover:text-colorBtn'}/>
                <Buttons value={'Start For Free'} className={'transition-all border-none py-2 px-10 text-colorBtn bg-white rounded-full outline-none font-bold text-nowrap hover:bg-Hover hover:text-colorWhile'}/>
            </div>
        </div>
      
    </header>
  )
}
