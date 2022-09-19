import React from 'react';
import kspVideo from "./kspVideo.mp4";
import starshipVideo from "./starshipVideo.mp4";
import "./PassionText.css";
import AutoVideo from '../AutoVideo/AutoVideo';
export default function InitiativeText(){
    return (
        <div>
            <h3>Tell us why you would be passionate about KSP.</h3>
            <p>
            I’m obsessed with my dream.
            </p>
            <p>
            With the sour smell of vinegar rockets, with the taste of victory after returning from Eve, KSP’s (the video game) most notorious planet to launch from, Rockets.
            </p>
            <AutoVideo src={kspVideo}></AutoVideo>
            <p>
            The mechanical typing on the keyboard, clicking away towards a successfully simulated rocket landing algorithm. The extravagant spectacle of every rocket launch, even through video (Have you watched Apollo 11 (2019)? I cried twice from it!), and the cheers around the world as we watched SN15 successfully land without RUD …Rockets.
            </p>
            <iframe className="video"width="560" height="315" src="https://www.youtube.com/embed/3_Lp_MGdO3k?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <p>
            I have one dream, to one day become a rocket engineer, and bring humans towards the stars. It was and is a dream constantly being cultivated through experiences in my life. With the rapid iterative development of SpaceX, the grandeur of space, and the vehicles that go to space; rockets are way too cool.
            </p>
            <AutoVideo src={starshipVideo}></AutoVideo>
            <p>
            I am obsessed with this dream. I chose my high school subjects, applied to imperial, and got into imperial with the sole reason being to follow my dream. I have become molded by this dream. To become proficient in the handling of rockets in the future.
            </p>
            <p>
            I have dedicated hundreds of hours of my free time studying rocketry, and physics to understand and complete projects that gradually brought me into the world of rocket engineering. From self-landing TVC-controlled rocket algorithms to interactive 3D orbital manipulator visualizations. I believe rockets are the future, it is the next step for humanity. That is why I have this goal, to see humans flying among the stars.
            </p>
            <iframe className="video"width="560" height="315" src="https://www.youtube.com/embed/Lu56CstaZkQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <p>
            Having talked to people in KSP, I’m especially passionate because I believe it can become a place I belong. Hearing the stories of how the rocket was manufactured almost brought me to tears. My working and club experience has enlightened me about the joy of working in a team. Especially, we share the same passion. This time, it will be about rockets, what I value the most in my life. Incredibly smart people, all of them super invested and willing to dedicate their life towards rocketry.
            </p>
            <p>
            If KSP is looking for someone ready to pour themselves into the project and be a great teammate to work with and reach the Karman line, I’m talking about my full body and soul, I am ready to offer it.
            </p>
            <hr />
        </div>
    );
}