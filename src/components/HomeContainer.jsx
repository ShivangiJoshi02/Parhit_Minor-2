import React from "react";
import Donation from "./images/donate.png";
import bgPhoto from "./images/bgPhoto.jpg"

const HomeContainer = ()=>{
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home" >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6"  >
                <div className="flex items-cneter gap-2 justify-center bg-pink-100 px-4 py-2 mt-4 rounded-full" >

                    <p className="text-base text-black p-2 font-semibold" >Donation Drive</p>
                    <div className="w-8 h-8 bg-pink-100 rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Donation}
                        className="w-full h-full object-contain"
                        alt="Donation"
                        ></img>

                    </div>
                </div>
                <p className="lg:text-[4.5rem]  text-[2.5rem] font-bold  tracking-wide text-headingColor" >There is <span className="text-pink-800 text-[3rem] lg:text-[5rem]" >Power</span> in <span className="text-pink-800 text-[3rem] md:text-[5rem]" >Giving</span>.</p>
                <p className="text-base text-textColor text-center md:text-left " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cum unde vero blanditiis sit quibusdam ex qui aliquam veniam quod labore quis esse, suscipit corrupti sunt fugiat adipisci obcaecati sapiente?</p>
                <button type="button" className="bg-gradient-to-br from-pink-200 to-pink-400 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto" >Donate Now</button>

            </div>
            <div className="py-2 flex-1">
                <div className="w-full flex items-center justify-center relative" >
                    <img src={bgPhoto} className="h-420  absolute top-10 right-18 " alt="bg"></img>
                    <div className="w-full h-full absolute flex items-center justify-center"></div>
                </div>
            </div>

        </section>
    )
}
export default HomeContainer;