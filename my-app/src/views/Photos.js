// all the imported components needed for this file
import React from "react";
import Photo from "../components/Photo";
import { useParams, useLocation } from "react-router-dom";
import NotFound from "../components/NotFound";
// this function allows you to be able to search for different images
// if the photo is not able to be found it will lead the user to a not found page
const PhotosView = ({ apiKey }) => {
  let { searchParam } = useParams();
  let location = useLocation();
  if (!searchParam) {
    searchParam = location.pathname.split("/")[1];
  }
  let [photos, setPhotos] = React.useState(null);
  React.useEffect(() => {
    getPhotos();
  }, [searchParam]);
  const getPhotos = async () => {
    await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchParam}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setPhotos(responseData.photos.photo);
        console.log(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
  return (
    <div class="photo-container">
      <h2>{searchParam}</h2>
      <ul>
        {/* same thing as an if else statement */}
        {photos && photos.length ? (
          photos.map((photo, index) => {
            return <Photo key={index} photo={photo} />;
          })
        ) : (
          <NotFound />
        )}
      </ul>
    </div>
  );
};
export default PhotosView;
