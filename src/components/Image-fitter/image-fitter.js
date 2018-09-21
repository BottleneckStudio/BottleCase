import React, {Component} from 'react'
import './image-fitter.css'


class ImageFitter extends Component{

    constructor(props){
        super(props);
        this.state = { imgClass: null, imgStyle: null};
        this.loader = true;
        this.img = React.createRef();
    }

    handleLoadedImage = (e) => {
        this.loader = true;
        let nH = e.target.naturalHeight;
        let nW = e.target.naturalWidth;
        if(nH > nW){
            this.setState({imgClass: 'horzimg'});
            this.checkImage(1);
        }
        else{    
            this.setState({imgClass: 'vertimg'});
            this.checkImage(2);
        }
    }

    setImageAttributes = (img, imgAttrib) =>{
        let offset = (img - this.props.width)/2;
        let attrib;
        let value = offset*-1;
        imgAttrib === 1 ? attrib = {top: `${value}px`} : attrib = {left: `${value}px`};
        console.log(attrib);
        this.setState({imgStyle: attrib});
    }

    checkImage = (type) =>{
        let result;
        setTimeout(
            function(){     
                type === 1 ? result = this.img.current.clientHeight : result = this.img.current.clientWidth;
                this.loader = false;
                this.setImageAttributes(result,type);
            }.bind(this), 
            100
        );   
    }

    render() {
        return( 
            <div id='prof' className="image" style={{width: this.props.width, height: this.props.width}}>
                <div className={this.loader ? 'loader':'loader active'}><div className="spinner"></div></div>
                <img id='img' ref={this.img} src={this.props.src} alt="" className={this.state.imgClass} onLoad={this.handleLoadedImage} style={this.state.imgStyle}/>
            </div>
        )

    }

}

export default ImageFitter