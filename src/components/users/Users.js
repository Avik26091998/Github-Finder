import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types'

function Users(props) {

        if(props.loading){
            return <Spinner />
        }
        else{

            return (
                <div style={ cardStyle }>
                    { props.users.map(user => (
                        <UserItem key={ user.id } user={ user } />
                    ))}
                </div>
            )
        }  
}

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;