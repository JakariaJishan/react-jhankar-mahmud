import React, { Component } from 'react'
import { products } from '../../dishes/Dishes'
import Menu from './Menu'

export default class Body extends Component {
    state = {
        dishes: products
    }
    render() {
        return (
            <div>
                {
                    this.state.dishes.map(ele => {
                        return(
                            <Menu dishes={ele}/>
                        )
                    })
                }
            </div>
        )
    }
}
