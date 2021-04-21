import React,{useState} from 'react';
import Display from './display';
import SearchIcon from '@material-ui/icons/Search';
import './profile.css'
const Profile =() => {
    const [data,setData] = useState({});
    const [username,setUsername] = useState("");
    const [repositories,setRepositories] = useState([]);

    const onchangeHandler = e => {
        console.log(e.target.value)
        setUsername(e.target.value);
        
    }
    

    const submitHandler = async e => {
        // var link = 'https://api.github.com/users/'+username;
        // console.log(link)
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const reposJson = await repositories.json();
        console.log(reposJson);

        if(profileJson){
            setData(profileJson);
            setRepositories(reposJson)
        }
    }
    return(
        <div className='container'>
            <div className='container-top'>
            <div className='search-item'>
         <SearchIcon/>
            <input
           type='text'
           placeholder="Search Profile"
           value={username}
           onChange={onchangeHandler}
           className='search'
           />
            </div>
           
           <button
           className="btn btn-primary"
           onClick={submitHandler}
           >Search</button>
           </div>
           {/* <ul>
               <li>{data.login}</li>
           </ul> */}
           <div className='display'>
           <Display data={data} repositories={repositories}/>
           </div>
           
        </div>

    )
}
export default Profile;