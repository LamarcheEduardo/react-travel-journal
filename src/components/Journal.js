import React from 'react'

export default function App(props) {
    return (
        <div className="journal--container">
            <div className="journal--card">
                <img src={props.image} alt="imagen de fondo" srcset="" className="journal--img"/>
                <div className="right-side">
                    <div className="right-side-top">
                        <img src="./images/placeholder.png" alt="placeholder" className="journal--holder"/>
                        <p>{props.location}</p>
                        <a href={props.maps} target="_blank" rel="noopener noreferrer" className="journal--link">View on Google Maps</a>
                    </div>
                    <h1 className="journal--title">{props.title}</h1>
                    <p className="journal--dates">{props.startDate} - {props.endDate}</p>
                    <p className="journal--description">{props.description}</p>
                </div>
            </div>
           <div className="card--divider"></div>
        </div>

    )
}