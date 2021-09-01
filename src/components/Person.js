import React, { Component } from 'react';

class Person extends Component {
    // declare constructor so that we can override our default constructor so that we can initially set the state object
    constructor(props) {
        // gives us all functionality of the default constructor that comes with Component
        super(props);
        this.state = {
            ageOfPerson: this.props.ageOfPerson
        }
    }

    render() {
        //method to increase the age by 1
        const happyBirthday = () => {
            console.log(`Happy birthday ${this.props.fNameOfPerson}`)
            this.setState({ ageOfPerson: this.state.ageOfPerson + 1 })
        }
        return (
            <>
                <h2>{this.props.lNameOfPerson}, {this.props.fNameOfPerson}</h2>
                <p>Age: {this.state.ageOfPerson}</p>
                <p>Hair Color: {this.props.hairOfPerson}</p>
                <p><button onClick={happyBirthday}>
                    Birthday for {this.props.fNameOfPerson} {this.props.lNameOfPerson}</button>
                </p>
            </>
        )
    }
}

export default Person;