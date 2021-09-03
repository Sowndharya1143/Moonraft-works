import React from 'react';
import classes from './Posts.css';
import Poster from "../Posts/Poster/Poster";
const Posts =(props)=>{
    var poster =props.posts.map((post) =>{
        return <Poster Img={post.img} key={post.id} name={post.name} desc = {post.desc}/>
    })
    return(
        <div className={classes.Posts}>
        <h4 className={classes.h4}>Popular Posts</h4>
        {poster}
        </div>
    );
}
export default Posts