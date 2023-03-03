import {useState} from 'react';
import{Bars3Icon, Bars2Icon, XCircleIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {Logo} from "../../assets";
import Link from './Link';

import { SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=> void
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const[isMenueToggle, setIsMenueToggle]=useState<boolean>(false);
    const isAboveMediumScreens= useMediaQuery("(min-width: 1060px)")
    const navbarBackground= isTopOfPage? "":"bg-primary-100 drop-shadow"

  return (
    <nav>
        <div className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full  py-6 `}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
             <div className={`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                <img alt='logo' src={Logo}/>

                {/* Right Side */}
                {isAboveMediumScreens?(
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        <Link page="OurClasses" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        <Link page="ContactUs" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Sign In</p>
                        
                        <ActionButton 
                             setSelectedPage={setSelectedPage}
                        >
                            Became a Member
                        </ActionButton>
                    </div>
                </div>
                ):(
                <button 
                    className='rounded-full p-2 bg-secondary-500' 
                    onClick={()=>setIsMenueToggle(!isMenueToggle)}
                >
                    <Bars3Icon className='h-6 w-6 text-white'/>
                </button>
                )}
             </div>
          </div>

        </div>
        {/* Mobile Menue Modal */}
        {!isAboveMediumScreens&& isMenueToggle && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[350px] bg-primary-100 drop-shadow-xl'>
                {/* Close Icon */}
                <div className='flex justify-end '>
                    <button  
                        onClick={()=>setIsMenueToggle(!isMenueToggle)} className=" p-6"
                        >
                        <XCircleIcon 
                          className='h-10 w-10 text-white bg-red-400 rounded-full'
                        />
                    </button>
                </div>

                {/* Menue Items */}
                <div className="flex flex-col gap-10 text-2xl justify-center items-center">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                        />
                    </div>
            </div>
        )}
    </nav>
    
  )
}

export default Navbar 