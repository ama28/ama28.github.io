import React from "react";
import '../App.css';

/* Returns the style the modal should follow based off screen size */
const findModalStyle = () => {
  if (window.matchMedia("(max-width: 600px)").matches)
    return {
      position: "absolute",
      backgroundColor: "#FFF",
      display: 'flex',
      flexDirection: 'column',
      zIndex: "1000",
      width: "100vw",
      top: "10%",
      borderRadius: "10px",
  }
  else return {
      position: "absolute",
      backgroundColor: "#FFF",
      display: 'flex',
      flexDirection: 'column',
      zIndex: "1000",
      width: "70vw",
      top: "10%",
      borderRadius: "10px",
  }
}

/* Styles for the modal itself */
const MODAL_STYLE = findModalStyle();

/* Styles for the overlay that will darken the background and bring 
   focus to the modal */
const OVERLAY_STYLE = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0, .6)",
  zIndex: "1000",
  overflowY: "auto",
};

/* Styles for a spacer that will add a margin to the bottom of the modal */
const SPACER_STYLE = {
  height: '100px',
  margin: '0 0 -100px 0',
}

export default function GameModal(props) {
  //return null is the modal should not be open
  if (!props.isOpen) return null;

  //function to prevent click behavior from parent elements from applying to element calling it
  const handleChildElementClick = (e) => {
    e.stopPropagation()
  }
  
  /* Renders all of the content of the blog post */
  const renderArticle = () => {
    return props.content?.map((item, idx) => {
      let paragraphArray = "";
      if (item[1] != null) paragraphArray = item[1].split('\\break') //breaks content into paragraphs inputted as "\break" in the csv
      return <div key={idx}><h3>{item[0]}</h3>{renderParagraphs(paragraphArray)}</div>
    })
  }

  /* renders paragraphs that have been delineated by \breaks */
  const renderParagraphs = (paragraphArray) => {
    //is there is only one paragraph just return it
    if (paragraphArray.length < 2) return renderImages(paragraphArray[0])

    //if there is more than one paragraph split them into separate elements
    return paragraphArray?.map ((paragraph, idx) => {
      return <div key={idx}>{renderImages(paragraph)}</div>
    })
  }

  /* renders sections of paragraphs that have been delineated by images */
  const renderImages = (brokenParagraph) => {
    //regex for finding an image in the format /assets/images/__.jpg or png or svg or jpeg
    const imgRegex = /\/\w+\/\w+\/\w+\.\w+/g

    /* sections delineated by image urls in the scv, each section string begins with a string representing 
       the URL for the image that should precede it */
    let sectionsSplitByImage = brokenParagraph?.split(/(?=\/\w+\/\w+\/\w+\.\w+)/g) 

    //if there are no images return the element
    if (sectionsSplitByImage == null) return <p>{sectionsSplitByImage}</p>

    //go through each section and render it followed by the next image until you reach the end
    let result = [];
    for (let i=0; i < sectionsSplitByImage.length; i++)
    {
      let imageLink = ''
      let content = sectionsSplitByImage[i]
      //if there is an image url in the section, extract it into a variable (imageLink) then remove it from the original string
      if (sectionsSplitByImage[i].match(imgRegex) != null) {
        imageLink = <img src={process.env.PUBLIC_URL + sectionsSplitByImage[i].match(imgRegex)} alt='and screenshot from the game being reviewed'></img> 
        content = sectionsSplitByImage[i].replace(/\S*.jpeg/, "").replace(/\S*.jpg/, "").replace(/\S*.svg/, "").replace(/\S*.png/, "")
      }
      //add an element containing an image and the section that follows to an array
      result.push(<div key={i}>{imageLink}<p>{content}</p></div>)
    }
    return result;
  }

  return (
    <>
      <div style={OVERLAY_STYLE} onClick={() => props.closeModal()}>
        <div style={MODAL_STYLE} onClick={(e) => handleChildElementClick(e)}>
          <img src={props.imageURL} className="modalHeader" alt='the cover art for the game being reviewed'></img>
          <div className="modalContent">
            <h1>{props.title}</h1>
            <h2 style={{fontWeight: '600'}}>Score: {props.starCount}/5</h2>
            <p>{props.description}</p>
            {renderArticle()}
            <p>Check out my deep dive into the game <a href={props.articlelink} target="_blank">here.</a></p>
          </div>
          <button className="closeModal" onClick={() => props.closeModal()}>CLOSE</button>
          <div style={SPACER_STYLE}></div>
        </div>
      </div>
    </>
  )
}