import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'
import { getNav } from '../navigation';
import { IoLogOut } from "react-icons/io5";
import { useSelector } from 'react-redux';
export const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const [allNav, setAllNav] = useState([]);
    const { pathname } = useLocation();
    const { role } = useSelector(state => state.auth);
    useEffect(() => {
        const navs = getNav(role);
        // console.log(navs)
        setAllNav(navs);
    }, []);
    return (
        <div>
            <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}>

            </div>
            <div className={`${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'} w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}>
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img src={logo} alt="Logo" className='w-full h-full' /></Link>
                </div>
                <div className='px-[16px]'>
                    <ul>
                        {allNav.map((element, index) => (
                            <li key={index}>
                                <Link
                                    to={element.path}
                                    className={`${pathname === element.path
                                        ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                                        : 'text-[#030811] font-bold duration-200'
                                        } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                                >
                                    <span>{element.icon}</span>
                                    <span>{element.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li className='text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                            <span><IoLogOut /></span>
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
