import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Navbar/Home'
import Mac from '../Navbar/Mac'
import Ipad from '../Navbar/Ipad'
import Iphone from '../Navbar/Iphone'
import Music from '../Navbar/Music'
import Cart from '../Navbar/Cart'
import AboutUs from '../Pages/AboutUs'
import Faq from '../Pages/Faq'
import ContactUs from '../Pages/ContactUs'
import { Products, ProductItem } from '../Pages/Products'
import NotFoundPage from '../Pages/NotFoundPage'
import Form from '../Login/Form'
import iPad from "../../images/products/ipad_pro.png"
import iPhone from "../../images/products/iPhone.jpg"
import macbookPro from "../../images/products/macbook_air.png"
import macbookAir from "../../images/products/macbook_pro.jpg"

const productArr = [
    {
        id: '001',
        name: 'Macbook Pro',
        header: 'MacBook Pro',
        briefInfo: 'Brief Info about macbook pro',
        detailedInfo: 'Detailed Info about macbook pro',
        price: 100000,
        imgSrc: macbookPro
    },

    {
        id: '002',
        header: 'Macbook Air',
        name: 'Macbook Air',
        briefInfo: 'Brief Info about macbook air',
        detailedInfo: 'Detailed Info about macbook air',
        price: 80000,
        imgSrc: macbookAir
    },
    {
        id: '003',
        header: 'iPad Pro',
        name: 'iPad Pro',
        briefInfo: 'Brief Info about iPad pro',
        detailedInfo: 'Detailed Info about iPad pro',
        price: 50000,
        imgSrc: iPad
    },
    {
        id: '004',
        header: 'iPhone 11',
        name: 'iPhone 11',
        briefInfo: 'Brief Info about iPhone 11',
        detailedInfo: 'Detailed Info about iPhone 11',
        price: 70000,
        imgSrc: iPhone
    }
]

class Routes extends Component {
    constructor() {
        super()
        this.state = {
            isAuth: false,
            addToCart: [],
            total: 0,
            username: 'admin',
            password: 'admin'
        }
    }
    handleSubmit = (username, password) => {
        console.log(username, password)
        if (username === this.state.username && password === this.state.password) {
            this.setState({
                isAuth: true
            })
        }
        else if (username === this.state.username && password !== this.state.username) {
            alert('Please enter correct password..!!')
        }
        else if (username !== this.state.username) {
            alert('Please enter correct username..!!')
        }
    }
    handleLogout = () => {
        this.setState({
            isAuth: false
        })
    }


    handleSubmitToCart = (data) => {

        console.log('add to cart clicked')
        let add = data
        console.log(add)
        this.setState({
            addToCart: [...this.state.addToCart, add],
            total: parseInt(this.state.total) + parseInt(add.price)
        });
        console.log('this.state.addToCart', this.state.addToCart)
        // data.history.push('/shoppingcart')
        // return data.history.push('/shoppingcart')
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact
                        render={() =>
                            <Home
                                isAuth={this.state.isAuth} />} />

                    <Route path='/login' exact
                        render={() =>
                            <Form
                                isAuth={this.state.isAuth}
                                submit={this.handleSubmit} />} />

                    <Route path='/mac' component={Mac} />
                    <Route path='/ipad' component={Ipad} />
                    <Route path='/iphone' component={Iphone} />
                    <Route path='/music' component={Music} />

                    <Route path='/shoppingcart'
                        render={(props) =>
                            <Cart isAuth={this.state.isAuth} {...props}
                                data={this.state.addToCart}
                                total={this.state.total}
                                logout={this.handleLogout} />
                        } />

                    <Route path='/aboutUS' component={AboutUs} />
                    <Route path='/faq' component={Faq} />
                    <Route path='/contactUs' component={ContactUs} />

                    {/* <Route 
                        path='/products/' 
                        render = {(props)=><Products {...props} 
                        data={productArr}/>} /> */}

                    <Route
                        path='/products/:orderby(asc|desc)'
                        render={(props) => <Products {...props}
                            data={productArr} />} />

                    <Route
                        path='/product/:id'
                        render={(props) =>
                            <ProductItem {...props}
                                isAuth={this.state.isAuth}
                                data={productArr}
                                handleSubmitToCart={this.handleSubmitToCart}
                            />} />

                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        )
    }
}
export default Routes