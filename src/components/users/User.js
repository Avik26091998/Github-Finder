import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'

class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getRepos(this.props.match.params.login)
    }
    
    render() {
        
        const {
            
            name, 
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        } = this.props.user
        
        
        
        return(
            <Fragment>

                <Link className="btn btn-light" to="/">Back To Search</Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />) }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                        <h1>{ name }</h1>
                        <h3>Location: { location }</h3>
                    </div>
                    <div>
                        { bio && <Fragment>
                            <h2>Bio</h2>
                            <p>{ bio }</p>
                            </Fragment>}
                        <a href={ html_url } className="btn btn-dark my-1">Github Profile</a>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers:{ followers } </div>
                    <div className="badge badge-success">Following:{ following } </div>
                    <div className="badge badge-danger">Public Repos:{ public_repos } </div>
                    <div className="badge badge-dark">Public Gists:{ public_gists } </div>
                </div>

                <Repos repos={ this.props.repos }/>
            </Fragment>
        )
    }
}

export default User