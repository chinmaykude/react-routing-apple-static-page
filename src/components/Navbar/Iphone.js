import React from 'react'
import { Link } from 'react-router-dom'
import iPhone from "../../images/iPhone/iPhone.jpg"
import appleCard from "../../images/iPhone/apple_card.jpg"

export default function Iphone(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className='row text-center' style={{ background: 'black', color: 'white' }}>
                    <div className="col-12 p-5">
                        <h4>iPhone 11 Pro</h4>
                        <h2>Pro cameras. Pro display. Pro performance.</h2>
                        <small>From $28.29/mo. or $679 with trade-in.*</small>
                        <div className='pt-1'>
                            <Link to='product/004' className="btn btn-primary text-white">Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src={iPhone} width="100%" height="100%" alt="iPhone image" />
                </div>
                <div className="row p-5 text-center">
                    <div className="col-12 col-md-4">
                        <div className='text-center pt-5'>
                            <h2 >Apple Card Monthly Installments</h2>
                            <p>Pay for your next iPhone over time, interest-free with Apple Card.</p>
                            <div>
                                <button className="btn btn-primary rounded">Buy</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <img src={appleCard} width="70%" height="90%" />
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
