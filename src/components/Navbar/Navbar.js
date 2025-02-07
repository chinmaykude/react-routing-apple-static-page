import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes/Routes'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar navbar-collapse-lg container-fluid d-flex flex-column flex-md-row justify-content-between" style={{ backgroundColor: "black" }}>
                <Link className="ml-5" to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#fff" /></svg>
                </Link>

                {/* <select className='btn btn-secondary' name="productCategories" id="product-select">
                    <option value="">--Product Categories--</option>
                    <option value="mac">Mac</option>
                    <option value="ipad">iPad</option>
                    <option value="iphone">iPhone</option>
                    <option value="music">Music</option>
                </select> */}
                <Link to='/iphone' className="py-2 text-white d-none mt-1 d-md-inline-block"       >iPhone</Link>
                <Link to='/music' className="py-2 text-white d-none mt-1 d-md-inline-block"       >Music</Link>
                <Link to='/mac' className="py-2 text-white d-none mt-1 d-md-inline-block"       >Mac</Link>
                <Link to='/ipad' className="py-2 text-white d-none mt-1 d-md-inline-block"       >iPad</Link>
                <Link to='/products/asc' className="py-2 text-white d-none mt-1 d-md-inline-block" >Products</Link>
                <Link to='/shoppingcart' className="py-2 text-white d-none mt-1 d-md-inline-block mr-5"  >Cart</Link>
            </div>
            <Routes />
        </React.Fragment>
    )
}
