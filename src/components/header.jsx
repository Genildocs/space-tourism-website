import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative sm:flex">
            <Menu
                style={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
                className=""
            >
                <motion.ul className=" sm:flex text-terciary font-Barlow font-normal pt-[6rem] pl-[2rem]">
                    <Link to="/">
                        <motion.li className="mb-[1rem] tracking-[2.7px] uppercase"                            
                            whileHover={{ opacity: 0.5 }}
                            whileTap={{ opacity: 1 }}
                        >
                            <span className="mr-1 font-bold">00</span>Home
                        </motion.li>
                    </Link>
                    <Link to="/destination">
                        <motion.li className="mb-[1rem] tracking-[2.7px] uppercase"
                            whileHover={{ opacity: 0.5 }}
                            whileTap={{ opacity: 1 }}
                        >
                            <span className="mr-1 font-bold">01</span>Destination
                        </motion.li>
                    </Link>
                    <Link to="/crew">
                        <motion.li className="mb-[1rem] tracking-[2.7px] uppercase"
                            whileHover={{ opacity: 0.5 }}
                            whileTap={{ opacity: 1 }}
                        >
                            <span className="mr-1  font-bold">02</span>Crew
                        </motion.li>
                    </Link>
                    <Link to="/technology">
                        <motion.li className="mb-[1rem] tracking-[2.7px] uppercase"
                            whileHover={{ opacity: 0.5 }}
                            whileTap={{ opacity: 1 }}
                        >
                            <span className="mr-1 f font-bold ">03</span>Technology
                        </motion.li>
                    </Link>
                </motion.ul>
            </Menu>

            <div className="p-5 flex items-center justify-between">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fillRule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF" />
                            <path
                                fill="#0B0D17"
                                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                            />
                        </g>
                    </svg>
                </motion.div>
                <div className="z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen && (
                            <svg
                                className="sm:hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="21"
                            >
                                <g fill="#D0D6F9" fillRule="evenodd">
                                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                                </g>
                            </svg>
                        )}
                        {isOpen && (
                            <svg
                                className="sm:hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                            >
                                <g fill="#D0D6F9" fillRule="evenodd">
                                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                                </g>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

const Menu = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
  width: 70%;
  min-height: 100vh;
  position: absolute;
  right: 0;
  z-index: 1;
  transition: transform 0.9s linear;

  @media (min-width: 640px) {
    position: relative;
    height: 100%;
    transform: translateX(0%) !important;
  }
`;
