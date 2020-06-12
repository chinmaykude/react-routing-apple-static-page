import React from 'react'
import { Link } from 'react-router-dom'
import ipadPro from "../../images/iPad/ipad_pro.jpg"
import ipadAir from "../../images/iPad/ipad_air.jpg"
import trade from "../../images/mac/trade.jpg"

export default function Ipad() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='row p-5 text-center'>
                    <div className="col-12">
                        <h1>Welcome to the new generation of iPad.</h1>
                    </div>
                </div>
                <div className="row p-5 text-center">
                    <div className="col-12 col-md-4">
                        <div className='text-center' style={{ width: "18rem" }}>
                            <h2 >iPad Pro</h2>
                            <div >
                                <h5 >The most advanced iPad ever.</h5>
                                <p >Starting at $799</p>
                                <Link to='product/003' className="btn btn-primary text-white">Buy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <img src={ipadPro} alt="test img" width="100%" />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12 col-md-8">
                        <img src={ipadAir} alt="test img" width="100%" />
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <div className='text-center' style={{ width: "18rem" }}>
                            <h2 >iPad Air</h2>
                            <div >
                                <h5 >Incredible power at an incredible value.</h5>
                                <p >Starting at $499</p>
                                <button className="btn btn-primary rounded">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12">
                        <h1 className='text-center' style={{ margin: 'auto' }}>Get up to $220 toward a new iPad.</h1>
                        <p className='text-center' style={{ margin: 'auto' }}>With Apple Trade In, just give us your eligible iPad and get credit for a new one. It’s good for you and the planet.</p>
                        <img src={trade} alt="trade" width="100%" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
