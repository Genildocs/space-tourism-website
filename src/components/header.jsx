import { useState } from "react";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="relative">
        {isOpen &&
            <Menu>
                <ul>
                    <Link to="/"><li><span>00</span>Home</li></Link>
                    <Link to="/destination"><li><span>01</span>Destination</li></Link>
                    <Link to="/crew"><li><span>02</span>Crew</li></Link>
                    <Link to="/technology"><li><span>03</span>Technology</li></Link>
                </ul>
            </Menu>
        }
        <div className="p-5 flex items-center justify-between ">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path
                            fill="#0B0D17"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                        />
                    </g>
                </svg>
            </div>
            <div className="z-50">
                <button  onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen && (
                        <svg className="sm:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                            <g fill="#D0D6F9" fillRule="evenodd">
                                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                            </g>
                        </svg>
                    )}
                    {isOpen && (
                        <svg className="sm:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="21">
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
    width: 65%;
    height: 100vh;
    position: absolute;
    right: 0;
    z-index: 1;
`