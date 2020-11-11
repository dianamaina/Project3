import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const [pictures, setPictures] = useState([]);

const onDrop = picture => {
  setPictures([...pictures, picture]);
  function UploadBtn(props) {
    return (
      <ImageUploader
        {...props}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
  };

  export default UploadBtn;
