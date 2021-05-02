import React, { Component } from 'react';
import { contacts } from './contactDetals';
import './contact.css';

interface Istate {
    loadNumbers: any,
    login : Boolean
}

interface Iprops {
    history : any
}

export default class Home extends Component<Iprops,Istate> {
    constructor(props: any) {
        super(props);
        this.Load = this.Load.bind(this);
        this.logOutClicked = this.logOutClicked.bind(this);
        this.state = {
            loadNumbers: 10,
            login: false
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY === document.documentElement.scrollHeight - window.innerHeight) {
                setTimeout(() => {
                    this.setState({
                        loadNumbers: this.state.loadNumbers + 10
                    })
                }, 1000);
            }
        });

        let currentUser = sessionStorage.getItem('currentloggedin');
        this.setState({
            login: currentUser && currentUser.length ? true : false
        })
        if(!(currentUser && currentUser.length)){
            this.props.history.push('/login');
        }
    }
    Load() {
        let dataToLoad = [];
        for (var i = 0; i < this.state.loadNumbers; i++) {
            let image = contacts[i] && require('../images/' + contacts[i].image);
            contacts[i] &&
                dataToLoad.push(
                    <div className='contactContainer' key={i}>
                        <div>
                            <div className='name'>{contacts[i].name+' '+contacts[i].surename}</div>
                            <div className='number'>{contacts[i].number}</div>
                        </div>
                        {/* <div className='imageParent'> */}
                        <img className='image' src={image.default} alt={contacts[i].image}></img>
                            
                        {/* </div> */}
                    </div>
                );
        }
        return dataToLoad;
    }
    logOutClicked(){
        sessionStorage.removeItem('currentloggedin')
        this.props.history.push('/login');
    }
    render() {
        return this.state.login && (
            <div className='logoutBtnContainer'>
                <div className='logOutBtnParent'>
                    <button className='logOutBtn' onClick={this.logOutClicked}>Logout</button>
                </div>
                <div className='loadedData'>
                    {this.Load()}
                </div>
            </div>
        )
    }
}