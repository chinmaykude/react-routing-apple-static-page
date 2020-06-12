import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AddedToCard from '../Pages/AddedToCard'

const Cart = (props) => {
    console.log('props', Object.values(props.data))
    if (props.isAuth) {
        return (
            <React.Fragment>
                {(props.data.length == 0) ?

                    <h3 className='text-center text-primary' style={{ height: "100vh" }}>Cart is empty!</h3> :

                    <div className='p-1' style={{ height: "100vh" }}>
                        <div className='text-right'>
                            <button className='btn btn-primary' onClick={props.logout}>Logout</button>
                        </div>
                        <div className='text-center p-4 mx-auto'>

                            <h4> Cart Details</h4>
                            <div className="row mx-auto">
                                <table className='mx-auto border'>
                                    <tr className='p-2 mb-2'>
                                        <th>Item Name</th>
                                        <th>Item Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                    {props.data.map((e) =>
                                        <tr key={e.id}>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td>1</td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                            <p>Total Cart Value is ₹ {props.total}</p>
                            {console.log(props.total)}
                        </div>
                    </div>

                }
            </React.Fragment>
        )
    }
    else {
        return <Redirect to='/login' />
    }
}
export default Cart