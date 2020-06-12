import React from 'react'
import {Link} from 'react-router-dom'

const ProductItem = (props) => {

    const url = props.location.search
    const query = new URLSearchParams(url)
    const id = query.get('id')

    const id = props.match.params.id;
    console.log(props)
    const data = props.data.find(item=>item.id===id)
    if(data) {
        return (
            <React.Fragment>
                <div className='text-center'>
                    <div className='display-4 mt-3 text-dark'>{data.name}</div>
                    {/* Product Card */}
                    <div class="card mx-auto my-3" style={{width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <img src={data.imgSrc} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title text-primary">{data.name} </h5>
                            <p class="card-text">{data.briefInfo}</p>
                            <p>₹ {data.price}</p>
                            <button onClick={props.handleSubmitToCart} class="btn btn-success">Add to cart</button>
                        </div>

                        {/* More info modal */}
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"> Show more info
                        </button>

                        <div class="modal " id="exampleModal" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-center" id="exampleModalLabel">{data.name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div>
                                            <img className='container' src={data.imgSrc} alt=""/>
                                            <p>{data.detailedInfo}</p>
                                            <p>₹ {data.price}</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
               
                    
            </React.Fragment>
        )
    }
    else {
        return <div>Item not found!!</div>
    }
}

const Products = (props) => {
    const data = props.data
    console.log(data)
    const query  = props.match.params.orderby
    
    if(query==='asc') {
        data=data.sort((a, b) => a.price-b.price)
    }
    else {
        data=data.sort((a, b)=> b.price-a.price)
    }

    return <div>
        <Link to='/products/asc'className="py-2 text-white d-none mt-1 d-md-inline-block" >Price Low to High</Link>
        <Link to='/products/desc'className="py-2 text-white d-none mt-1 d-md-inline-block" >Price High to Low</Link>
            <ul className='p-3 my-5' style={{listStyleType: 'none'}}>
                {data.map(item=>(
                    <li key={item.id} className='h1 text-center p-1 my-2'>
                        <Link to={`product?id=${item.id}`}>{item.name}</Link>
                    </li>
                    ))}
            </ul>
        </div>
    
}

export {Products, ProductItem}