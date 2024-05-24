import React, {useEffect} from "react";
import './main.scss'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css'


    const Data = [
        {
        id: 1,
        imgsrc: img1,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "₹52000",
        description: "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities."
        },
        {
        id: 2,
        imgsrc: img2,
        destTitle: "Maui",
        location: "Hawaii, USA",
        grade: "ADVENTURE",
        fees: "₹60000",
        description: "Maui is a dream destination for surfers and nature lovers. With its pristine beaches and lush greenery, it's the perfect getaway."
        },
        {
        id: 3,
        imgsrc: img3,
        destTitle: "Kyoto",
        location: "Japan",
        grade: "CULTURAL HERITAGE",
        fees: "₹45000",
        description: "Kyoto is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses."
        },
        {
        id: 4,
        imgsrc: img4,
        destTitle: "Paris",
        location: "France",
        grade: "ROMANTIC",
        fees: "₹68000",
        description: "Paris, the city of love, is renowned for its cafe culture, the Eiffel Tower, and the Louvre Museum. A must-visit for romantics and art enthusiasts."
        },
        {
        id: 5,
        imgsrc: img5,
        destTitle: "Santorini",
        location: "Greece",
        grade: "SCENIC RELAX",
        fees: "₹57000",
        description: "Santorini is known for its whitewashed buildings with blue domes, stunning sunsets, and volcanic beaches. Perfect for a tranquil escape."
        },
        {
        id: 6,
        imgsrc: img6,
        destTitle: "Queenstown",
        location: "New Zealand",
        grade: "ADVENTURE",
        fees: "₹65000",
        description: "Queenstown is the adventure capital of New Zealand, offering bungee jumping, skiing, and beautiful landscapes that attract thrill-seekers."
        },
        {
        id: 7,
        imgsrc: img7,
        destTitle: "Rome",
        location: "Italy",
        grade: "HISTORICAL",
        fees: "₹52000",
        description: "Rome, the Eternal City, is a treasure trove of ancient ruins, including the Colosseum and the Roman Forum. Ideal for history buffs."
        },
        {
        id: 8,
        imgsrc: img8,
        destTitle: "Maldives",
        location: "Indian Ocean",
        grade: "LUXURY RELAX",
        fees: "₹90000",
        description: "The Maldives are known for their crystal-clear waters, overwater bungalows, and vibrant marine life. A luxury paradise for beach lovers."
        },
        {
        id: 9,
        imgsrc: img9,
        destTitle: "Machu Picchu",
        location: "Peru",
        grade: "CULTURAL ADVENTURE",
        fees: "₹49000",
        description: "Machu Picchu is an ancient Incan city set high in the Andes Mountains. It’s renowned for its archaeological significance and stunning mountain views."
        },
        {
        id: 10,
        imgsrc: img10,
        destTitle: "Sydney",
        location: "Australia",
        grade: "URBAN EXPLORATION",
        fees: "₹60000",
        description: "Sydney is known for its Sydney Opera House, Harbour Bridge, and beautiful beaches. A vibrant city with a lot to offer urban explorers."
        },
        {
        id: 11,
        imgsrc: img11,
        destTitle: "Goa",
        location: "India",
        grade: "BEACH PARTY",
        fees: "₹15000",
        description: "Goa is famous for its stunning beaches, vibrant nightlife, and Portuguese heritage. A perfect destination for beach lovers and party enthusiasts."
        },
        {
        id: 12,
        imgsrc: img12,
        destTitle: "Jaipur",
        location: "India",
        grade: "CULTURAL HERITAGE",
        fees: "₹18000",
        description: "Jaipur, the Pink City, is known for its majestic palaces, historic forts, and colorful bazaars. A cultural treasure trove for history and architecture enthusiasts."
        }
    ];
    


const Main = () => {

    useEffect(()=>{
        Aos.init({duration:300})
    },[])


    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right"  className="title">
                    Most visited destinations
                </h3>
            </div>


            <div className="secContent grid">
                {
                    Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgsrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main;