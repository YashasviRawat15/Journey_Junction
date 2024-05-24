import React, {useEffect} from "react";
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter email address "/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div> 
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> JourneyJunction.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Discover the world with JourneyJunction. From exotic beaches to historic landmarks, we bring you the best travel experiences. Explore our curated destinations, plan your perfect getaway, and embark on unforgettable adventures. Join our community and make every journey memorable with JourneyJunction.
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Insaurance
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>
                    
                        <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>

                        <div  data-aos="fade-up" data-aos-duration="5000"  className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className="icon"/>
                                Ocenia
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>&copy; 2024 Yashasvi Rawat</small>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Footer;