import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component{
    
    state = {
        text: ''
    }

    onChange = (e) => {

        this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {

        e.preventDefault()

        if(this.state.text === ''){

            this.props.setAlert('Please enter text', 'light')
        }
        else{

            this.props.searchUser(this.state.text)
            this.setState({ text: '' })
        }
    }


    render() {

        return (

            <div>
                <form className="form" onSubmit={ this.onSubmit.bind(this) } >
                    <input type="text" name="text" placeholder="search.." value={ this.state.text } onChange={ this.onChange }/>
                    <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
                {this.props.usersLength > 0 ? <button className="btn btn-block btn-dark" onClick={ this.props.clearUser }>Clear</button> : null }

                
            </div>
        )

    }

}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    usersLength: PropTypes.number.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search;