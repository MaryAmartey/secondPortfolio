import React from "react";
import Navbar from "../navbar/Navbar";
import extracurricularsImg from '../../images/extracurImg.jpg';
import FloatingNav from "../floatingNav/FloatingNav";
import "../extraCurricular/extracurricular.css"
import { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


export default function ExtraCurricular(){
    const data=[
        {
            activity: "Member of Choreo dance dance. Participated in on-campus perfomances"
        },
        {
            activity: "Member of Oberlin Cooperative Student Association (OSCA): Acted as the cleaning coordinator for Third World Social Justice Coop from 09/01/2021 to 05/01/2022 Duties included acting as a laision between OSCA and the members in the house and assigning and supervising house duties."
        },
        {
            activity: "Member of African Student Association: Participated and helped organized on-campus events"
        }
    
    ]
    return(
        <div>
            <Navbar color="var(--color-primary-light)" />

            <img className="imgEdit" src={extracurricularsImg}/>
            <Swiper 
                    modules={[Pagination, Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true, }}
                    className="curricular"
            >
                {
                data.map(({activity}, index) => {
                    return (
                    <SwiperSlide key={index} className="extra_container">
                        <p>{activity}</p>
                    </SwiperSlide>
                    )
                })
                }
            </Swiper>
            <FloatingNav/>
        </div>
    )
}