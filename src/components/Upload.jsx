import { card } from "../assets";
import styles, { layout } from "../style";
import React, {ChangeEvent, useState} from "react";
import axios from 'axios';

function Upload() {
  
  const [image, setImage] = useState()
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
    hide();
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      const response = await axios.post('http://localhost:5000/api/upload', formData);
  
      // const imageUrl = `/static/uploads/${response.data.filename}`;
  
      // // display uploaded image on the webpage
      // const img = document.createElement('img');
      // img.src = imageUrl;
      // document.body.appendChild(img);
    } catch (error) {
      console.log(error);
    }
  };
  


  // const [image, setImage] = useState(null);
  // const handleFileUpload = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setImage(URL.createObjectURL(selectedFile));
  //   hide();
  //   const formData = new FormData();
  //   formData.append('image', selectedFile);

  //   fetch('/uploaded', {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImage(data.filename);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });

  //     readFile();
  // };
  //this is to display image on webpage
  // function readImg(event){
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //     hide();
  //     handleUpload();
  //     readFile();
  //   }
  // }

  // const handleUpload = async () => {

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     const response = await fetch("http://localhost:3000/api/uploadfile", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       console.log("File uploaded successfully!");
  //     } else {
  //       console.error("Upload failed.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [text, setText] = useState("");
  const readFile = async () => {
    try {
      const response = await fetch("./../../back-end/report.txt");
      const text = await response.text();
      setText(text);
    } catch (error) {
      console.error(error);
    }
  };


  function hide(){
    var img_placeholder = document.getElementById("img_placeholder");
    var text_placeholder = document.getElementById("text_placeholder");
    
    img_placeholder.style.display= "none";
    text_placeholder.style.display= "none";
  }

  function defaultSettings(){
    var uploaded = document.getElementById("uploaded");
    var text_uploaded = document.getElementById("text_uploaded");
    var img_placeholder = document.getElementById("img_placeholder");

    if(img_placeholder.style.display== "none"){
      uploaded.style.display="block";
      text_uploaded.style.display="block";
    }
    else{
      uploaded.style.display="none";
      text_uploaded.style.display="none";
    }

  }

  return (
    <section onLoad={() => defaultSettings()} className={`flex ${styles.flexStart} items-center md:items-start md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex ${styles.flexStart} ${styles.paddingX} flex-col items-center`}>

      <div className="mb-10">
        <input type="file" accept="image/*" onChange={handleFileChange} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}/>
      </div>

      <div id ="uploaded">
        <img src={image} alt="uploadedimage" className="w-[100%] h-[100%] max-w-md" />
      </div>

      <div id ="img_placeholder">
        <img src={card} alt="imageplaceholder" className="w-[100%] h-[100%] max-w-md" />
      </div>

      <div className="mt-10 mb-10">
        <button onClick={handleFileUpload} disabled={!selectedFile} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          Upload
        </button>
      </div>

    </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex-col`}>
      <h2 className={styles.heading2}>
        Results
      </h2>

      <div id="text_placeholder" >
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          Here is where the report will be generated!
        </p> 
      </div>

      <div id="text_uploaded">
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          {text}
        </p>
      </div>
      

      
    </div>

    
  </section>
  );
}

export default Upload;
