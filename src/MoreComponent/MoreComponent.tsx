import React from 'react';
import "./MoreComponent.css"
import CV from "./KSP_CVDraftFinal_20220914.pdf"

export default function ExtraComponent(){
    return (
        <div>
            <h1>More</h1>
            <h3>CV:</h3>
            <embed type="application/pdf" src={CV} title="CVPDF" className='CVPDF'/>
        </div>
    );
}