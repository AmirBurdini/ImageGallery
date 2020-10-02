import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'

class Manager extends Component {

    // a shuffle func to randomize images order
    shuffle = (arr) => {
        let curr = arr.length, temp, random;
      
        // while there remain elements to shuffle...
        while (0 !== curr) {
      
          // pick a remaining element...
          random = Math.floor(Math.random() * curr);
          curr -= 1;
      
          // And swap it with the current element.
          temp = arr[curr];
          arr[curr] = arr[random];
          arr[random] = temp;
        }
      
        return arr;
    }

    render() {

        let source = []; // target arr
        let photos = this.props.images; // images json
        let limit = this.props.numOfImages; // limit number of images

        // only if photos is defined
        if (photos) { 

            this.shuffle(photos); // randomize order
            // pull umages url out of the images json
            photos.forEach(img => {
                
                if (limit > 0) {
                    source.push({src : img.url});
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