import React , {Component} from 'react';
import classes from './MainContent.css';
import img1 from "../../assets/girl_hat.jpg";
import img11 from "../../assets/avatar_smoke.jpg";
import img2 from "../../assets/man_hat.jpg";
import img21 from "../../assets/girl_train.jpg";
import img22 from "../../assets/girl.jpg";
import img3 from "../../assets/runway.jpg";
import img31 from "../../assets/girl_mountain.jpg";
import img32 from "../../assets/boy.jpg";
import img33 from "../../assets/girl_hood.jpg";
import Blog from '../../Components/Blog/Blog';
class MainContent extends Component{
    state={
        Blogs:[
            {id:"eee" , date:"May 2, 2016" ,imag :img1 , short : "More Hats!" ,showreplies:false,likeStatus:false,
             long1:"I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
            , long2 : "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                ,replies :[
                    {img: img11 , name:"George" , date :"May 3, 2015, 6:32 PM" , desc :"Great blog post! Following"}

                ]
            },
            {id:"err" , date : "April 23, 2016" , imag : img2 , short : "Hats!" ,showreplies:false,likeStatus:false,
             long1 : "The trend this summer is hats for men!" ,
            long2 : "Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            replies : [
                {img:img21 , name : "Amber" , date : "April 26, 2015, 10:52 PM" , desc : "Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                {img:img22 , name : "Angie" , date : "April 23, 2015, 9:12 PM" , desc : "Love hats!!"}
            ]},
            {id:"tt" , date : "April 7, 2016" , imag : img3 , short : "Dont miss!" ,showreplies:false,likeStatus:false,
             long1 : "The runway in New York City this weekend is gonna be legendary!" ,
            long2 : "Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            replies : [
                {img : img31 , name : "Jane" , date : "April 8, 2015, 10:32 PM" , desc : "That was a great runway show! Thanks for everything."},
                {img : img32 , name : "John" , date : "April 10, 2015, 7:22 PM" , desc : "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
                {img : img33 , name : "Anja" , date : "April 7, 2015, 9:12 PM" , desc : "Cant wait for the runway to start!"}
            ]
        } 
        ]
    }
    RepliesHandler=(id)=>{
        let replies = this.state.Blogs;
        for(let itr = 0; itr < replies.length;itr++){   
            if(id === replies[itr].id){
                let replyValue = replies[itr].showreplies;
                replyValue = !replyValue;
                replies[itr].showreplies = replyValue;
            }
            this.setState({Blogs: replies})
        }
            
        }
    LikeChangeHandler=(id)=>{
        let replies = this.state.Blogs;
        for(let itr = 0; itr < replies.length;itr++){   
            if(id === replies[itr].id){
                let replyValue = replies[itr].likeStatus;
                replyValue = !replyValue;
                replies[itr].likeStatus = replyValue;
            }
            this.setState({Blogs: replies})
        }
    }
    render(){
        const value=this.state.Blogs.map((blog) =>{
            return(
            <Blog key={blog.id} date={blog.date} 
            imag={blog.imag} short={blog.short} 
            long1={blog.long1} long2={blog.long2} 
            replies={blog.replies} showreplies={blog.showreplies} likeStatus={blog.likeStatus} 
            clicked={()=>{this.RepliesHandler(blog.id)}}
            Like={()=>{this.LikeChangeHandler(blog.id)}}/>
            );
        })
        return(
            <div className={classes.Maincontent}>
                {value}
            </div>
        );
    }
}
export default MainContent;