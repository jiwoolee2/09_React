import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledR = styled.div`
  width: 800;
`

const CommentList = (props) => {


  const[comment , setComment] = useState([]);
  //console.log('야이ㅑ디',props.id);
  const id = props.id;

  useEffect( () => {

    axios.get(`http://localhost/busans/comments/${id}`)
    .then((result) => {
      console.log(result.data);
      setComment([...result.data]);
    });
  }, [props.success]);
/*  success는  */


  return (
    <>
      {comment != [] ? comment.map((e,i)=>{
        return(
          <div style={{width: "800px" , margin:"auto"}} key={i}>
            <div>{e.content}</div>
            <div>{e.createDate}</div>
            <br />
          </div>
        );
      })
     : (
        <h2>아직 댓글 존재 x00</h2>
      )}
    
    </>
  );
};
export default CommentList;