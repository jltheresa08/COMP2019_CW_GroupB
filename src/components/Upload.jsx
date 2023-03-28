import { card } from "../assets";
import styles, { layout } from "../style";
import UploadBtn from "./UploadBtn";
import SubmitBtn from "./SubmitBtn";
import React, {ChangeEvent, useState} from "react";

function Upload() {
  
  const [image, setImage] = useState()
  var texts;
/**
 * This is where we need to connect to back end.
 * 
 */

  function readImg(event){
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      hide();
      readFile();
    }
  }
  
/**
 * HMMMMMMM cant really read
 *
 */

  function readFile() {

    fetch('././report.txt')
    .then((r) => {return r.text()})
    .then(text  => {
      texts = text;
    }) 
    
  }


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

    readFile();

  }

  return (
    <section onLoad={() => defaultSettings()} className={`flex ${styles.flexStart} items-center md:items-start md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex ${styles.flexStart} ${styles.paddingX} flex-col items-center`}>

      <div className="mb-10">
        <input type="file" onChange={readImg} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}/>
      </div>

      <div id ="uploaded">
        <img src={image} alt="uploadedimage" className="w-[100%] h-[100%] max-w-md" />
        
      </div>

      <div id ="img_placeholder">
        <img src={card} alt="imageplaceholder" className="w-[100%] h-[100%] max-w-md" />
      </div>
    
      <div className= {`flex flex-row mb-10`}>
        <div>
          <SubmitBtn styles={`mt-10`} />
        </div>
      </div>
      
    </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex-col`}>
      <h2 className={styles.heading2}>
        Results
      </h2>

      <div id="text_placeholder">
        {texts}
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Sample text
        </p> 
      </div>

      <div id="text_uploaded">
        {texts}
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          in upload
        </p>
      </div>
      

      
    </div>

    
  </section>
  );
}

export default Upload;
