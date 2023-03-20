import React from "react";

import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { FaHandsHelping } from "react-icons/fa";
import { MdAdd, MdLogout } from "react-icons/md";
import Logo from "./images/PARHIT.png";
import Avatar from "./images/user.png";

import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        }
        else {
            setIsMenu(!isMenu);

        }};
        const logout = () =>{
            setIsMenu(false)
            localStorage.clear()

            dispatch({
                type: actionType.SET_USER,
                user: null
            });
        };
    return (
        <header className="fixed z-50 w-screen bg-pink-100 p-3 px-4 md:p-6 md:px-16">
            {/* for desktop and tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between" >
                <Link to={"/"} className="flex items-center gap-2" >
                    <img className="w-12 object-cover" src={Logo} alt="logo"></img>
                    <p className="text-headingColor text-xl font-bold">PARHIT</p>
                </Link>
                <div className="flex items-center gap-8
                "  >
                    <motion.ul initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8" >
                        <li className="text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >Home</li>
                        <li className="text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >Contact</li>
                    </motion.ul>
                    <div className="relative flex items-center justify-center">
                        <FaHandsHelping className="text-textColor text-3xl cursor-pointer " />
                        <div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold" >0</p>
                        </div>

                    </div>
                    <div className="relative"  >
                        <motion.img whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-10 min-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="userProfile"
                            onClick={login}
                        />
                        {
                            isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                    {user && user.email === "shivangijoshi153@gmail.com" && (
                                        <Link to={"/createItem"}>
                                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                                New Goods <MdAdd />
                                            </p>
                                        </Link>
                                    )}                                                              

                                    <p onClick={logout} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        Logout <MdLogout />
                                    </p>
                                </motion.div>
                            )
                        }


                    </div>




                </div>

            </div>
            {/*for mobile */}
            <div className="md:hidden items-center justify-between flex w-full h-full" >
                
                <div className="relative flex items-center justify-center">
                        <FaHandsHelping className="text-textColor text-3xl cursor-pointer" />
                        <div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold" >0</p>
                        </div>

                </div>
                <Link to={"/"} className="flex items-center gap-2" >
                    <img className="w-12 object-cover" src={Logo} alt="logo"></img>
                    <p className="text-headingColor text-xl font-bold">PARHIT</p>
                </Link>
                <div className="relative"  >
                    <motion.img whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-10 min-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="userProfile"
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                {user && user.email === "shivangijoshi0223@gmail.com" && (
                                    <Link to={"/createItem"}>
                                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                            New Goods<MdAdd />
                                        </p>
                                    </Link>
                                )}
                                <ul 
                                    className="flex flex-col" >
                                    <li className="hover:bg-slate-200 px-4 py-2 text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >Home</li>
                                    <li className="hover:bg-slate-200 px-4 py-2 text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >About Us</li>
                                    <li className="hover:bg-slate-200 px-4 py-2 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >Contact</li>
                                </ul>

                                <p onClick={logout} className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200  gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base">
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }


                </div>


            </div>
        </header>
    );
};
export default Header;
