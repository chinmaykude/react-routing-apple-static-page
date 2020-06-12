import React from 'react'
import Banner from '../Banner/Banner'
import { Redirect, Link } from 'react-router-dom'
import iPhone from "../../images/iPhone/iPhone.jpg"
import appleCard from "../../images/iPhone/apple_card.jpg"
import macBook from "../../images/mac/macbook_pro.jpg"

const Home = (props) => {
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
                        <img src={appleCard} alt="apple card monthly installments" width="70%" height="90%" />
                    </div>

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
            {/* <h6 className='text-primary'>Welcome back esteemed user..!!</h6> */}
            {/* <div>
                    <button className='btn' onClick={props.logout}>Logout</button>
                </div> */}
            <Banner />

        </React.Fragment>
    )
}
export default Home