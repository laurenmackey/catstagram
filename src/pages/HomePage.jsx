// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 5: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.

import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from "../components/ImageUploaderForm.jsx";
import FeedList from "../components/FeedList.jsx";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
			photos: data.photos
        }
	}

    handleAddPhoto = (url) => {
    	let lastPhoto = this.state.photos[(this.state.photos.length - 1)]
    	let { id } = lastPhoto;
    	let photo = {
    		"id": id + 1,
    		"likes": 0,
    		"title": "Default",
    		"url": url,
    		"userLiked": false
    	}

    	// If you pass this.setState a function instead of an object, you have access to the previous state
    	this.setState((prevState) => {
    		return {
    			photos: prevState.photos.concat([photo])
    		}
    	})
    }

    render() {  
    	console.log(this.state.photos);  	
    	return (
    	    <div className="HomePage">
                <ImageUploaderForm handleAddPhoto={ this.handleAddPhoto }/>
                <FeedList photos={ this.state.photos }/>
    	    </div>
    	);
    }
}

export default HomePage