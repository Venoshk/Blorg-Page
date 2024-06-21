import Desktop from "../../assets/images/illustration-phones.svg"

import "./Resposividade.css"
export const SectionTwo = () => {
  return (
    <section className="flex items-center justify-center w-full py-28">
         
        <div className=" relative w-full justify-center items-center flex flex-col bg-Section px-28 h-[600px] md:h-[400px] rounded-borderRadiusMobile md:rounded-borderRadius bg-Home bg-Size bg-PositionMobile md:bg-Position bg-no-repeat  md:flex-row ">
            <img src={Desktop} alt="" className="absolute -top-52 md:top-0 md:relative"/>            
            <div className="handline text-center md:text-left">
                <h1 className="font-medium text-colorWhile text-4xl mb-10">State of the Art Insfrastructure</h1>
                <p className=" text-colorWhile">With reliability and speed in mind, wordwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
            </div>
        </div>
       
        
       
    </section>
    
  )
}
