import { useState } from 'react'
import Context from './Context'
import { Component } from 'react'

class Provider extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        job: '',
        address: '',
        review: ''
    }

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    setName: value => this.setState( state => ({...state, name: value}) ),
                    setLastname: value => this.setState( state => ({...state, lastname: value}) ),
                    setEmail: value => this.setState( state => ({...state, email: value}) ),
                    setJob: value => this.setState( state => ({...state, job: value}) ),
                    setAddress: value => this.setState( state => ({...state, address: value}) ),
                    setReview: value => this.setState( state => ({...state, review: value}) ),
                    submitForm: () => console.log(this.state)
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider
