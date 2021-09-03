import React ,{Component} from 'react';
import classes from './Blog.css';
import AllReplies from './AllReplies/AllReplies';

class Blog extends Component{
   

    render(){
        const arrayLength = this.props.replies.length; 
        const valueLike=(this.props.likeStatus) ?(<button className={classes.leftClass} onClick={this.props.Like}><b><i className={"fa fa-check"}>&nbsp;</i>Liked</b></button>):
        (<button className={classes.leftClass} onClick={this.props.Like}><b><i className={"fa fa-thumbs-up"}>&nbsp;</i> Like</b></button>);
        
    return(
        <section className={classes.Blog}>
            <h1 className={classes.title}>TITLE HEADING</h1>
            <h5 className={classes.title2}>Title description,<span className={classes.span}>{this.props.date}</span></h5>
            <img src={this.props.imag} className={classes.Image} alt="problem"></img>
            <p className={classes.Content}><strong className={classes.ShortContent}>{this.props.short}</strong>{this.props.long1}</p>
            <p className={classes.Content}>{this.props.long2}</p>
            <div className={classes.Parentclass}>
            {valueLike}
            <button className={classes.rightClass} onClick={this.props.clicked} >Replies&nbsp; <span className={classes.one}>{arrayLength}</span></button>
            </div>
            
            <hr className={classes.hrline}/>
            <AllReplies replies={this.props.replies} showreplies={this.props.showreplies} />
        </section>

    );
}
}
export default Blog