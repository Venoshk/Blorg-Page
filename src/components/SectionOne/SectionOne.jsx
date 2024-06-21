import {useEffect, useState} from 'react'
import Desktop from "../../assets/images/illustration-editor-desktop.svg"
import Mobile from "../../assets/images/illustration-editor-mobile.svg"
export const SectionOne = () => {

    const [image, setImage] = useState(window.innerWidth <= 768 ? Mobile : Desktop);

    useEffect(() => {
        const handleRisize = () => {
            if(innerWidth <= 768) {
                setImage(Mobile)
            }else{
                setImage(Desktop)
            }
        }

        window.addEventListener("resize", handleRisize);

        return () => {
            window.removeEventListener("resize", handleRisize)
        }
    }, [])

  return (
    <section className="relative flex flex-col-reverse text-center md:text-left md:flex-row justify-center items-center w-full py-10">

        <div className="container flex items-center justify-center w-full mb-10">

            <h1 className=" title text-3xl md:text-4xl text-colorTitle font-semibold absolute top-0 md:top-[10%] md:left-[38%] mt-10">Designer for the future</h1>

        
                <div className="content-headline flex flex-col items-center justify-between px-5">  

                    <div className="headline mb-10 w-4/5">
                        <h1 className="text-3xl text-colorTitle font-bold mb-4">Introduciong an extensible editor</h1>
                        <p className="text-colorVeryDark">Blogr features an exceedingly intuitive interface whice lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of enbeds such as images, videos , and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of blog</p>
                    </div>
                    
                    <div className="headline mb-10 w-4/5">
                        <h1 className="text-3xl text-colorTitle font-bold mb-4">Robust content management</h1>
                        <p className="text-colorVeryDark">Blogr features an exceedingly intuitive interface whice lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of enbeds such as images, videos , and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of blog</p>
                    </div>  
                </div>
                
        </div>

        <img src={image} alt="" />
    </section>
  )
}
