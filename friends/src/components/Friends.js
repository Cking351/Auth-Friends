import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            this.setState({
                friends: response.data.
            })
        })
    }
}

export default Friends;