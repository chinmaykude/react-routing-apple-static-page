import React from 'react'
import { Container, Box, Input, Button, TextField } from '@material-ui/core'
import styles from './form.module.css'
import { Redirect } from 'react-router-dom'

const Form = (props) => {
    var name = React.createRef()
    var password = React.createRef()

    const handleClick = () => {
        // console.log(name.current.value, password.current.value)
        props.submit(name.current.value, password.current.value)
    }
    if (props.isAuth) {
        return <Redirect to='/' />
    }
    else {
        return (
            <Container className='p-5' style={{ height: "100vh" }}>
                <h3 className='text-primary text-center pb-1'>Welcome To Login Page!!</h3>
                <form className='text-center'>
                    <TextField inputRef={name} type='text' label='Username' color='primary' variant="outlined" id="outlined-basic" className="mb-2" />
                    <br />
                    <TextField inputRef={password} type='password' label='Password' color='primary' variant="outlined" id="outlined-basic" className="mb-2" />
                    <br />
                    <Button onClick={handleClick} variant='contained' color='primary'>Submit</Button>
                </form>
            </Container>
        )
    }
}

export default Form