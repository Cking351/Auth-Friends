import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class Friends extends React.Component {
    state = {
        friends: [] ,
        initialState :{
            name: "",
            age:"",
            email:"",
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(error => console.log(error))
    }

    handleChange = event => {
        this.setState({
            initialState: {
                ...this.state.initialState,
                [event.target.name]: event.target.value
            }
        })
    }

    createFriend = event => {
        event.preventDefault()
        axiosWithAuth()
        .post('/api/friends', {
            name: this.state.initialState.name,
            age: this.state.initialState.age,
            email: this.state.initialState.email,
        })
        .then(response => {
            this.getData(response)
            this.setState({
                initialState:{
                    name: '',
                    age: '',
                    email: '',
                }
            })
        })
    }

    formatData = () => {
        const formattedData = []
        this.state.friends.forEach((friend) => {
            formattedData.push({
                name: friend.name,
                age: friend.age,
                email: friend.email
            })
        })
        return formattedData
    }

    render() {
        const friends = this.formatData()

        return (
            <div>
             <form onSubmit={this.createFriend}>
                 <input
                 type='text'
                 name='age'
                 value={this.state.initialState.age}
                 onChange={this.handleChange}
                 placeholder='age'
                 />
                 <input
                 type='text'
                 name='name'
                 value={this.state.initialState.name}
                 onChange={this.handleChange}
                 placeholder='name'
                 />
                 <input
                 type='text'
                 name='email'
                 value={this.state.initialState.email}
                 onChange={this.handleChange}
                 placeholder='email'
                 />
                 <button>Create New Friend</button>
             </form>



                {this.state.friends.map( person => (
                    <div>
                        <h3>{person.name}</h3>
                        <p>{person.age}</p>
                        <p>{person.email}</p>
                        <br></br>
                    </div>
                    
                ))}
            </div>
        )
    }
}

export default Friends;