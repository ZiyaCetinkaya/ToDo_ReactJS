import React, { Component } from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'

import Item from './Item/Item';
import Loading from '../UI/Loading/Loading';

import './Items.css'

class Items extends Component {
    state = {
        items: [],
        loading: false
    }

    loadItems = () => {
        this.setState({ loading: true });

        axios.get('https://todoapp-7c49e.firebaseio.com/items.json')
            .then(response => {
                this.setState({ items: response.data });
                this.setState({ loading: false });
            })
            .catch(error => { this.setState({ error: true }) });
    }

    componentDidMount() {
        this.loadItems();
    }

    deleteItemHandler = (id) => {
        swal({
            title: "Are you sure?",
            text: "Item will be removed!",
            icon: "warning",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete('https://todoapp-7c49e.firebaseio.com/items/' + id + '.json')
                        .then(response => {
                            swal("Item has been deleted!", {
                                icon: "success",
                            });
                            this.loadItems();
                        }).catch(err => { console.log(err) });
                }
            });
    }

    render() {
        let items = <p>Please add some item.</p>;

        if (this.state.items) {
            this.state.loading ?
                (
                    items = <Loading />
                ) : (
                    items = Object.keys(this.state.items)
                        .map(igKey => {
                            return [...Array(this.state.items[igKey])].map((_, i) => {
                                return <Item key={_.id} text={_.title} clicked={() => { this.deleteItemHandler(igKey) }} />
                            })
                        })
                        .reduce((arr, el) => {
                            return arr.concat(el);
                        }, [])
                );
        }

        return (
            <div className="items" >
                {items}
            </div>
        );
    }
}

export default Items;