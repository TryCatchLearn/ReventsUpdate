import React, { Component } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class CropperInput extends Component {
  cropImage = () => {
      const {setImage, setCropResult} = this.props;
      if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {
          return;
      }

      this.refs.cropper.getCroppedCanvas().toBlob(blob => {
          setCropResult(URL.createObjectURL(blob));
          setImage(blob)
      })
  };

  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        ref='cropper'
        src={imagePreview}
        style={{ height: 200, width: '100%' }}
        aspectRatio={1}
        viewMode={0}
        dragMode='move'
        guides={false}
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage}
      />
    );
  }
}

export default CropperInput;
