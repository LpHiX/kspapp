import React from 'react';
import lightboxWork from "./lightboxWork.webp"
import blackboxWork from "./blackboxWork.webp"
import motionTrack from "./motionTrack.mp4"
import ekccFinal from "./ekccfinal.webp"
import AutoVideo from '../AutoVideo/AutoVideo';

export default function InitiativeText(){
    return (
        <div>
            <h3>Give an example of activity that you have done as a team.</h3>
            <p>
                During my last internship, I was involved in many projects, but one required the use of my teamwork skills the most. It was a strenuous research project with a tight deadline and highly ambitious ideas. It was about using motion tracking technology to develop and implement live performances augmented with computer graphics.
            </p>
            <p>
                I volunteered for the responsibility of handling the motion tracking system. This was a core part of the project. Working with the visual effect artists, dancers, and the stage crew, I learned to adapt to the needs of the team and improve upon each other’s ideas. Discussing possible art tech ideas in meetings for a month, we were given one week to prepare for a live demonstration for our clients.
            </p>
            <AutoVideo src={motionTrack}></AutoVideo>
            <p>
                It was my first time in such a rushed and ambitious project. It was very demanding but working in a team like this made it very fulfilling. I propped up the 16 infrared cameras, linked them to a central switch, and through adapted software, I linked the data through a common communication protocol with my colleagues. Being the most familiar with the tracking data, I worked with the visual effect artists and dancers to plan our performances to make full use of the tracking technology.
            </p>
            <img src={lightboxWork} alt="Me and a few coworkers"/>
            <p>
                There was one problem, the visual effect artists had one additional performance that required a faster tracking system. Knowing my strengths in coding and maths, I proposed to develop our own tracking solution to solve this problem. The camera SDK was in C++, so I had to learn the language from scratch. I had to develop the vector theory, calibration maths, and systems on the fly, and I ended up developing a working prototype in three days. 
            </p>
            <img src={blackboxWork} alt="Working on the third party app"/>
            <p>
                I gave myself the responsibility of creating an improved tracking system, one that my team depended on, and I would go to any lengths to complete it. I and my coworkers worked tirelessly after office hours to complete our project from 8 am to 11 pm every day for the week. We were of all different ages but we ate together, worked together and laughed together. We became a great team that supported each other beneficially.
            </p>
            <p>
                By the end of the week, we were able to present our seven different performances to our client. This experience taught me how rewarding it can be to work in a team. My competence in accomplishing this task put me into managing a few more motion-tracking projects the following month. Where I used the systems I developed along with my team to deliver performances to many live audiences.
            </p>
            <img src={ekccFinal} alt="Our team with our clients"/>
            <hr />
        </div>
    );
}