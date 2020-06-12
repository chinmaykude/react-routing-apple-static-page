import React from 'react'
import { Redirect } from 'react-router-dom'
import itunes from "../../images/music/itunes.png"

export default function Music(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row" style={{ background: 'black', color: 'white' }}>
                    <div className="col-12 text-center p-5">
                        <img src={itunes} alt="apple music logo" />
                        <h1>Lose yourself in 60 million songs.</h1>
                        <button className="btn btn-primary">Try it free</button>
                    </div>
                </div>
                <div className="row">
                    <img src="https://johnlewis.scene7.com/is/image/JohnLewis/apple-music-river-block-b-021018?$rsp-home-hero-lg$&" alt="apple music description" width="100%" />
                </div>
            </div>
        </React.Fragment>
    )
}
