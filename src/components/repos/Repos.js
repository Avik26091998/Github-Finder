import React, { Fragment } from 'react'
import RepoItem from './RepoItem'

function Repos(props) {
    
    return(

        props.repos.map(Repo => (
            <RepoItem Repo={ Repo } key={ Repo.id } />
        ))
    )   
}

export default Repos