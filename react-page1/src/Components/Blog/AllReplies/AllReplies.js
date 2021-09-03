import React from 'react'
import Replies from '../../Replies/Replies';
const AllReplies =(props)=>{

    const value=props.replies.map((replay,index) =>{
        return(
            <Replies key = {index} img={replay.img} name={replay.name} date={replay.date} desc={replay.desc}/>
             
        );
    
    }
)
    return(
        props.showreplies ?<div>{value}</div> : null
    );
}
export default AllReplies;