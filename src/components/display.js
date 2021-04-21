import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './display.css'
const Display= ({data,repositories}) =>{
return(
    <div>
<table className="table table-striped">
    <thead>
  <tr>
    <th>Name</th>
    <th>Avatar</th>
    <th>Location</th>
    <th>Bio</th>
    <th>Repositories = {repositories.length}</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>{data.name}</td>
    <td>
        {!data.avatar_url
        ?'':
        <img src={data.avatar_url}/>}
    </td>
    <td>{data.location}</td>
    <td>{data.bio}</td>
    <td>
        {repositories.map(repo =>{
            return(
                <div className="repo">

                    <li> <GitHubIcon/>{repo.name}</li>
                </div>
            )
        })}
    </td>
    
  </tr>
  </tbody>
  </table>
    </div>
)

}
export default Display;