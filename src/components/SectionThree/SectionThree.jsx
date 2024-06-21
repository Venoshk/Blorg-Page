import {useEffect, useState} from 'react';
import Laptop from "../../assets/images/illustration-laptop-desktop.svg"
import LaptopMobile from "../../assets/images/illustration-laptop-mobile.svg"
import "./SectionThree.css"
export const SectionThree = () => {

    const [image, setImage] = useState(window.innerWidth <= 768 ? LaptopMobile : Laptop);

    useEffect(() => {
        const handleRisize = () => {
            if(innerWidth <= 768){
                setImage(LaptopMobile)
            }else{
                setImage(Laptop)
            }
        };

        window.addEventListener('resize', handleRisize)

        return () => window.removeEventListener('resize', handleRisize)
    },[])

  return (
    <section className='w-full flex items-center ju' id='SectionThree'>
        <div className='relative flex flex-col items-center justify-center w-full py-10 md:flex-row md:mt-10 border-red-600'>
        <img src={image} alt="" className='relative md:-left-1/4 md:w-3/4'/>

            <div className='content relative flex flex-col md:-left-20 px-4'>
                <div className='headline text-center md:text-left '>
                        <h2 className='font-medium  mb-5 text-colorTitle text-3xl '>Free, open, simples </h2>
                        <p className='mb-5  text-colorVeryDark font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ab nihil tenetur eveniet cum consequatur tempora, eum dolores, in hic minima soluta quis veritatis quaerat! Iste officia cumque consectetur laboriosam?</p>
                    </div>

                    <div className='headline text-center md:text-left'>
                        <h2 className='font-medium  mb-5 text-colorTitle text-3xl'>Powerful tooling </h2>
                        <p className='mb-5  text-colorVeryDark font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ab nihil tenetur eveniet cum consequatur tempora, eum dolores, in hic minima soluta quis veritatis quaerat! Iste officia cumque consectetur laboriosam?</p>
                    </div>
            </div>
        </div>
      
        
    </section>
  )
}
