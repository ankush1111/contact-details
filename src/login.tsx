import { Component } from 'react';
import './contact.css';

interface Istate {
    email: any,
    password : any
}

interface Iprops {
    history : any
}

export default class Login extends Component <Iprops, Istate>{
    constructor(props: any) {
        super(props);
        this.emailAuthenticate = this.emailAuthenticate.bind(this);
        this.passAuthenticate = this.passAuthenticate.bind(this);
        this.submitClick = this.submitClick.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    emailAuthenticate(email: String) {
        this.setState({
            email
        })
    }
    passAuthenticate(password: String) {
        this.setState({
            password
        })
    }
    submitClick() {
        const { email, password } = this.state;
        if (!email.length) {
            alert('Email should not be empty')
        } else if (!password.length) {
            alert('Password should not be empty')
        } else {
            sessionStorage.setItem('currentloggedin',email);
            this.props.history.push('/home')
        }
    }
    render() {
        if(sessionStorage.getItem('currentloggedin')){
            this.props.history.push('/home')
            return <div></div>
        }else{

            return (
                <div className='loginPage'>
                    <input type='text' className='input' placeholder='Username' onChange={(e) => this.emailAuthenticate(e.target.value)}></input>
                    <input type='text' className='input' placeholder='Password' onChange={(e) => this.passAuthenticate(e.target.value)}></input>
                    <button className='loginBtn' onClick={() => this.submitClick()}>Submit</button>
                </div>
            )
        }
    }
}