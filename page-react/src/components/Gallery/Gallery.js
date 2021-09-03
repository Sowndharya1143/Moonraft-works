import React,{Component} from 'react';
import classes from './Gallery.css';
import ImagesPart from '../../components/Gallery/ImagesPart/ImagesPart';
import ScrollableAnchor from 'react-scrollable-anchor';

class Gallery extends Component{
    state={
        Images :[
            {id:1, path:"g1.jpg"},
            {id:2, path:"bb2.jpg"},
            {id:3, path:"bb3.jpg"},
            {id:4, path:"g2.jpg"},
            {id:5, path:"g3.jpg"},
            {id:6, path:"g4.jpg"}
        ]
    }
    render(){
        var ImagesTemplate = this.state.Images.map((Image,index) =>{
            return <ImagesPart key = {index} path={Image.path}/>
        })
    return(
        <ScrollableAnchor id={"gallery"}>
        <section className={classes.GallerySection}>
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et Lorem ipsum</p>
            <div className={classes.GalleryImages}>
                {ImagesTemplate}
            </div>
            
        </section>
        </ScrollableAnchor>
    );
    }
}
export default Gallery;