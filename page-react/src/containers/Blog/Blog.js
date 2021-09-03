import React,{Component} from 'react';

import classes from './Blog.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import ScrollableAnchor from 'react-scrollable-anchor';

class Blog extends Component{
    state ={
        Blogs :[
            {id:1, month:"jul", dateNo:"15", path:"../../images/bb2.jpg", title:"Health Benefits Of A Raw Food",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            date:"12/4/2019", tags:"3"},
            {id:1, month:"jul", dateNo:"15", path:"../../images/bb3.jpg", title:"Health Benefits Of A Raw Food",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            date:"12/4/2019", tags:"3"},
            {id:1, month:"jul", dateNo:"15", path:"../../images/g4.jpg", title:"Health Benefits Of A Raw Food",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            date:"12/4/2019", tags:"3"}
        ]
    }
    render(){

        return(
            <ScrollableAnchor id={"blog"}>
            <section className={classes.BlogSection}>
            <div className={classes.BlogDiv}>
                <h1>Blog</h1>
                <p className={classes.Subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
                 tempor incididunt ut labore et Lorem ipsum</p>
                <div className={classes.BlogCards}>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                </div>
            
            
            
            </div>
        </section>
        </ScrollableAnchor>
        );
    }
}
  
export default Blog;