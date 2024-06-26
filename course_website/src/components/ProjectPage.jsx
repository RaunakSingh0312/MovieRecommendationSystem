import React from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aditya from "./images/team_member_1.jpg"
import arjun from "./images/team_member_2.jpg"
import raunak  from "./images/team_member_3.jpg"
import krishna from "./images/team_member_4.jpg"
import image4 from "./images/image4.png"
import demo from "./images/demo.jpg"
import reportPage from "./images/reportPage.jpg"
import cosineHeat from "./images/cosine_heatmap.png"
import genres from "./images/genres.png"
import genrePCA from "./images/genres_pca.png"
import linkedin from "./images/linkedinLogo.png"
import github from "./images/githubLogo.png"


export default function ProjectPage(props) {
    const members = [
        { name: 'Aditya Sahani', imgSrc: aditya ,github:'https://github.com/sahaniaditya' ,linkedin:'https://www.linkedin.com/in/aditya-sahani/'},
        { name: 'Arjun Bhattad', imgSrc: arjun,github:'https://github.com/ArjunBhattad2004' ,linkedin:'https://www.linkedin.com/in/arjun-bhattad-095710255/' },
        { name: 'Raunak Singh', imgSrc: raunak ,github:'https://github.com/RaunakSingh0312',linkedin:'https://www.linkedin.com/in/raunak-singh-16a48725a/'},
        { name: 'Krishna Chaudhary', imgSrc: krishna ,github:'https://github.com/krishuraj05',linkedin:'https://www.linkedin.com/in/krishna-chaudhary-b1b984256/'}
    ];

    const carouselImage =[
        { imgSrc:demo},
        { imgSrc:cosineHeat},
        { imgSrc:genrePCA},
        { imgSrc:genres}
    ]

    return (
        // Course Website heading added
        <div className="container mx-auto text-center font-sans">
            <p className="mb-10 text-6xl font-bold">Movie Recommendation System</p>
            <div className="links mb-10 text-2xl">
                <span><a href="#paper">Report</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem">Code</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem/tree/main/dataset">Dataset</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem/tree/main/demo_website">Demonstration</a></span>
            </div>
            {/* Carousel added */}
            <div className="carousel-container border border-gray-300 rounded-lg overflow-hidden mb-8 w-3/4 mx-auto">
                <Carousel showThumbs={false} transitionTime={1000} showStatus={false} infiniteLoop={true} autoPlay={true}>
                    {carouselImage.map((img, index) => (
                        <div key={index} className="flex items-center justify-center mt-5">
                            <div className="w-4/5">
                                <img
                                    src={img.imgSrc}
                                    alt="slides"
                                    className="object-cover w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>



            {/* Carousel ended */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
                <div className="description mb-8">
                    <h2 className="text-2xl font-bold mb-4">Abstract</h2>
                    <p>{props.projectDescription}</p>
                </div>
                <div className="video-container mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 ">Spotlight Video</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <YouTube videoId={props.videoId} />
                    </div>
                </div>
            </div>
            {/* Youtube Video  */}
            <div className="problem-statement text-left mb-8">
                <h2 className="text-4xl font-bold mb-4">Problem Description</h2>
                <div className="border mb-5">
                    <img
                    className="block w-10/12 mx-auto"
                    src={image4}
                    alt="problemStatement"
                    />
                </div>
                <p>{props.problemDescription}</p>
                <p className="my-5">{props.solutionDescription}</p>
                <p className='mb-3 text-2xl'><b>Approaches Tried</b> </p>
                
                <li className='mb-2'><b>Content-Based Filtering</b>: We analyze movie attributes such as genre, cast, and director to recommend similar movies based on their content characteristics. Techniques like cosine similarity and Jaccard similarity are employed for this purpose.</li>
                        
                <li className='mb-2'><b>Collaborative Filtering</b>
                : We recommend items based on the preferences of other users, leveraging user-item interactions to identify users with similar tastes and preferences. Methods such as matrix factorization and nearest neighbors are utilized in collaborative filtering.</li>

                <li><b>Hybrid Filtering</b>: 
                Our hybrid model combines the strengths of both content-based and collaborative filtering methods to enhance recommendation accuracy and coverage. Techniques like cosine similarity and matrix factorization are integrated to provide comprehensive recommendations.</li>
            </div>
            {/* Problem Description */}

            {/* About Section Added */}
            <p className='text-left text-3xl mb-6 font-bold'>Report</p>

            <div className="flex items-center justify-center ">
                <div className="max-w-screen-lg bg-gray-100 rounded-lg shadow-lg p-8 flex">
                    <div className="flex flex-col justify-center ">
                        <h2 className="text-xl font-bold mb-4">Machine Learning Approaches for Effective
                        Movie Recommendations: A Comprehensive Study</h2>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        <div className="relative h-64 w-64">
                            <img
                            src={reportPage}
                            alt="Report"
                            className="object-contain w-full h-full rounded-lg"
                            />
                        </div>
                    
                        <div className="bg-white p-4 rounded-b-lg mt-2">
                            <a href={props.reportLink} className="text-lg font-semibold"><u>[Report]</u></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="members mb-8 text-left my-10">
              <p className="mb-10 text-3xl font-bold">Team</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {members.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white rounded-lg shadow-md p-4 border">
                                <img src={member.imgSrc} alt={member.name} className="w-36 h-36 mx-auto mb-5 rounded-full" />
                                <p className="mb-1">{member.name}</p>
                                <a href={member.github}>
                                    <img
                                    src={github}
                                    className='h-10  rounded-full ml-2 mt-2 inline-block'
                                    />
                                </a>
                                <a href={member.linkedin}>
                                    <img
                                    src={linkedin}
                                    className='h-10 rounded-full ml-5 mt-2 inline-block'
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold mb-4 text-left pl-7">References</h2>
                <ul className="list-disc ml-8 text-left">
                    {props.allReferences.map((reference, index) => (
                        <div className='mb-2'>
                            <a href = {reference.link} className="mb-1"><b>[{index+1}]</b> {reference.author} "{reference.description}"</a>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="problem-statement text-left mb-8">
                <h2 className="text-4xl font-bold mb-4">Acknowledgement</h2>
                <p className="my-5">{props.acknowledgement}</p>
            </div>

            <div className="problem-statement text-left mb-8">
                <h2 className="text-4xl font-bold mb-4">Contact</h2>
                <p className="my-5">For any queries contact <a href = "https://github.com/sahaniaditya"><u>Aditya Sahani</u></a> or raise issue on <a href="https://github.com/sahaniaditya/MovieRecommendationSystem"><u>Github</u></a></p>
            </div>
        </div>
    );
}