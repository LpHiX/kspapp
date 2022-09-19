import React, {useRef, useMemo, useEffect} from 'react';
export default function AutoVideo(props: {src: string}){
    const targetRef = useRef<HTMLVideoElement>(null);
    const callbackFunction = (entries: IntersectionObserverEntry[]) =>{
        const [entry] = entries;
        if(entry.isIntersecting){
            targetRef.current?.play();
        } else{
            targetRef.current?.pause();
        }
    }
    const options = useMemo(() =>{
        return{
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        }
    }, []);
    useEffect(() =>{
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observe(currentTarget);

        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, options])
    return (
        <video className="lazy" autoPlay muted loop playsInline ref={targetRef}>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}