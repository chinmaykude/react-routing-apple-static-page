import React from 'react'
import { Link } from 'react-router-dom'


const ProductItem = (props) => {
    const id = props.match.params.id;
    console.log(props)
    const data = props.data.find(item => item.id === id)
    if (data) {
        return (
            <React.Fragment>
                <div className='text-center'>
                    <div className='display-4 mt-3 text-dark'>{data.name}</div>
                    {/* Product Card */}
                    <div class="card mx-auto my-3" style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img src={data.imgSrc} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title text-primary">{data.name} </h5>
                            <p class="card-text">{data.briefInfo}</p>
                            <p>₹ {data.price}</p>
                            <button onClick={() => props.handleSubmitToCart(data)} class="btn btn-success">Add to cart</button>
                        </div>

                        {/* More info modal */}
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"> Show more info
                        </button>

                        <div class="modal" tabindex="-1" role="dialog" id="exampleModal" >
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
                                            <img className='container' src={data.imgSrc} alt="product image" />
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
    let data = props.data
    console.log(data)

    let query = props.match.params.orderby

    if (query === 'asc') {
        data = data.sort((a, b) => a.price - b.price)
    }
    else {
        data = data.sort((a, b) => b.price - a.price)
    }
    return <div className='text-center'>
        <Link to='/products/asc' className="py-2 mt-1 d-md-inline-block btn btn-outline-primary mx-2" >Price Low to High</Link>
        <Link to='/products/desc' className="py-2 mt-1 d-md-inline-block btn btn-outline-primary mx-2" >Price High to Low</Link>
        <div class="row">
            {data.map(item => (
                <div key={item.id} class="col-12 col-md-4 vw-100" >
                    <div class="card mx-auto my-3" style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img src={item.imgSrc} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.detailedInfo}</p>
                            <p>₹ {item.price}</p>
                            <Link className='btn btn-primary' to={`/product/${item.id}`}>Buy {item.name}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>

}

export { Products, ProductItem }