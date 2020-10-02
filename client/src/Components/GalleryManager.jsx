import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'

class Manager extends Component {

    render() {

        let source = []; // target arr
        let photos = this.props.images; // images json
        let limit = this.props.numOfImages; // limit number of images

        // only if photos is defined
        if (photos) { 

            // pull umages url out of the images json
            photos.forEach(img => {
                
                if (limit > 0) {
                    // used magic number for height and width
                    // because json did not specify sizes the defauld was NaN
                    source.push({src : img.url, height : 100, width : 200});
                    limit--;
                }
            });
            
            return (
                <div>
                    <Gallery photos = {source} />
                </div>
            )
        }
    }
}
export default Manager;