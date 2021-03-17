import React, { Fragment } from 'react'

function RepoItem(props) {

    return(

        <div className="card">
            <h3>
                <a href={ props.Repo.html_url }>{ props.Repo.name}</a>
            </h3>
        </div>
    )   
}

export default RepoItem