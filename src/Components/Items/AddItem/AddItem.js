import React, { Component } from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import { Route } from 'react-router-dom'

import Loading from '../../UI/Loading/Loading';
import Items from '../Items';

import './AddItem.css'

class AddItem extends Component {
    state = {
        itemTitle: '',
        submitted: false,
        loading: false
    }

    postItemHandler = () => {
        if (this.state.itemTitle.length <= 0) {
            swal("Please Set Item Text!", "", "warning");
            return;
        }
        this.setState({ loading: true });
        const data = {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            title: this.state.itemTitle
        }

        axios.post('https://todoapp-7c49e.firebaseio.com/items.json', data)
            .then(response => {
                swal("New Item Added!", "", "success");
                this.setState({ submitted: true, itemTitle: '', loading: false });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            this.state.loading ? (
                <Loading />
            ) : (
                    <div>
                        <div className="add-item">
                            <div className="my-form">
                                <input type="text"
                                    placeholder="Item Text"
                                    value={this.state.itemTitle}
                                    onChange={(event) => this.setState({ itemTitle: event.target.value })} />
                                <button onClick={this.postItemHandler}>Save</button>
                            </div>
                        </div>

                        <Route path="/" exact component={Items} />
                    </div>
                )
        );
    }
}

export default AddItem;