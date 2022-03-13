import {React,useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
export default function PostDetailPage(){
  const postId = useParams().id;
  const [data, setData] = useState({});
  
    useEffect(() => {
      axios({url:`https://jsonplaceholder.typicode.com/posts/${postId}`,headers:'đâsdasd'}).then(function (response) {                         
          setData(response.data)
          console.log(response.headers)
          axios.defaults.headers.common['Authorization'] = response.data.id
      }, []).catch(error => {
          console.log(error);
      });

  },[])

    return <div>
       ID: {data.id}<br />
       title:{data.title}<br />
       body:{data.body}
    </div>
}