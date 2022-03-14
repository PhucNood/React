import  React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function PostPage() {
    const [posts, setPosts] = useState([]);
    const [sortType, setSortType] = useState('Title -- Sort (NONE)')
    const type = { NONE: 'Title -- Sort (NONE)', DESC: 'Title -- Sort (DESC)', ASC: 'Title -- Sort (ASC)' };
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
            setPosts(response.data);
        }, []).catch(error => {
            console.log(error);
        });

    }, [])

    function handleRemove(evt) {
        evt.preventDefault();

        setPosts(() => posts.filter(post => post.id != evt.target.value));
       
    }

    function handleSort() {
        let sortPosts;
        setSortType(sortType === type.NONE ? type.ASC : type.DESC);
        if (sortType === type.DESC) setSortType(type.NONE);
      
        switch (sortType) {
            case type.NONE:
                sortPosts = posts.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    } else if (a.title < b.title) {
                        return -1;
                    } else {
                        return 0
                    }
                })
                setPosts(sortPosts);
                break;
            case type.ASC:
                sortPosts = posts.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    } else if (a.title < b.title) {
                        return 1;
                    } else {
                        return 0
                    }
                })
                setPosts(sortPosts);
                break;
            case type.DESC:
                sortPosts = posts.sort(function (a, b) {
                    return a.id - b.id;
                })
                break;
                default:break;
        }


    }

    const searchPosts =posts.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))






    return <div >
        <input onChange={evt => setSearchText(evt.target.value)} type="search" placeholder='search by title' style={{ margin: '20px' }}></input>

        <Table   striped bordered hover>
            <thead>
                <tr>

                    <th>  ID</th>
                    <th onClick={handleSort}>	{sortType}</th>
                    <th>	Actions</th>
                </tr>
            </thead>
            <tbody>
                {searchPosts.map(data => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/postdetail/${data.id}`}>
                           
                                View detail
                            </Link>

                            <button className="btn btn-danger" value={data.id} onClick={handleRemove} style={{ marginLeft: '20px' }}>
                                
                                Remove</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
}