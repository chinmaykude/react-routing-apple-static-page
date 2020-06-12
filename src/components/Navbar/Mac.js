import React from 'react'
import { Link } from 'react-router-dom'
import macBook from "../../images/mac/macbook_pro.jpg"
import macPro from "../../images/mac/mac_pro.jpg"
import trade from "../../images/mac/trade.jpg"

export default function Mac() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='row p-5 text-center'>
                    <div className="col-12">
                        <h1>Calling all pros.</h1>
                        <h4>Our most powerful pro lineup ever — MacBook Pro, Mac Pro, and Pro Display XDR. Ready for your best work ever.</h4>
                    </div>
                </div>
                <div className="row p-5 text-center">
                    <div className="col-12 col-md-8">
                        <img src={macBook} alt="macbook pro img" width="90%" />
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='text-center'>
                            <small className='text-left'>16-inch model</small>
                            <h2 >MacBook Pro</h2>
                            <div >
                                <h5 >The best for the brightest.</h5>
                                <Link to='product/001' className="btn btn-primary text-white">Buy</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row p-5">
                    <div className="col-12 col-md-4 text-center">
                        <div className='text-center' >
                            <h2 >Mac Pro</h2>
                            <div >
                                <h5 >Power to change everything.</h5>
                                <button className="btn btn-primary rounded">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <img src={macPro} alt="test img" width="90%" />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12">
                        <h1 className='text-center' style={{ margin: 'auto' }}>Get up to $220 toward a new iPad.</h1>
                        <p className='text-center' style={{ margin: 'auto' }}>With Apple Trade In, just give us your eligible iPad and get credit for a new one. It’s good for you and the planet.</p>
                        <img src={trade} alt="trade" width="90%" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
