import React from 'react';
// import Lightbox from 'react-images'
import Pic from './pics/pic1.jpg'

class Picture extends React.Component{
  constructor(props) {
  	super(props)
    this.state = {
      lightboxIsOpen: false,
      imageStatus: 'Loading'

    }
    this.closeLightbox = this.closeLightbox.bind(this);
  }	
  closeLightbox () {
    this.setState({
      lightboxIsOpen:false
    })
  }
  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
 
  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }
  render() {
    console.log(Pic)
  	return (
      <div>
      <img 
       src={ Pic } alt={"Picture1"}
       onLoad={this.handleImageLoaded.bind(this)}
       onError={this.handleImageErrored.bind(this)}
      />
       { this.state.imageStatus }
      </div>
    )
  }
}

export default Picture;
  	  // <Lightbox
     //    images={[{ src: Pic }]}
     //    isOpen={!this.state.lightboxIsOpen}
     //    onClickPrev={this.gotoPrevious}
     //    onClickNext={this.gotoNext}
     //    onClose={this.closeLightbox}
     //  />	