import React from "react"
import Navbar from "../navbar/Navbar"
import extracurricularsImg from '../../images/extracurImg.jpg'
import FloatingNav from "../floatingNav/FloatingNav"
import "../extraCurricular/extracurricular.css"
import { Pagination,Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import firstProject from '../../images/firstProject1.png'
import cardBackground from '../../images/jj-ying-7JX0-bfiuxQ-unsplash.jpg'
import memeGene from '../../images/memeGeneProject.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation"


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

    const projects=[
        {
            img:firstProject,
            overview:"TicTacTae Game",
            link: "https://mksprojects.netlify.app/"
        },
        {
            img:memeGene,
            overview:"Meme Generator",
            link:"https://mksprojects.netlify.app/memeGene"
        },
        
    ]
    return(
        <div>
            <Navbar color="var(--color-primary-light)" />
            <section className= "project_box" >
            <p className="project_title">Recent Projects</p>
            <div className= "box" >
                {
                projects.map(project=> {
                    return (
                    <div className = "card" >
                        <img className="cardImg" src={project.img} />
                        <div className="cardInfo">
                            <p>{project.overview}</p>
                            <a href={project.link} className="btn btn-primary">View</a>
                        </div>

                    </div>
                    )})
                }
            </div>
            </section>
            <hr></hr>

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