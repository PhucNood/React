import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
export default function PostDetailPage(){
  const postId = useParams().id;
  const [data, setData] = useState({});
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(function (response) {                         
          setData(response.data)
      }, []).catch(error => {
          console.log(error);
      });

  },[postId]);

    return <div>
       ID: {data.id}<br />
       title:{data.title}<br />
       body:{data.body}
    </div>
}