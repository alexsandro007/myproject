import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Article() {   
 //let { id } = useParams();
 const id = 1;
 const [data, setData] = useState([]);
  console.log(id);
 useEffect(() => {
     axios.get( `http://localhost:3000/posts/${id}`)
     .then((response) => {
         setData(response.data);
       }).catch(function(error){
           console.log(error)
       })
 },[id]);
 return (
 <div>
   
     <h1>
       <p className="information">{data.information}</p>
      
     </h1>
   </div>
 );
}

export default Article
