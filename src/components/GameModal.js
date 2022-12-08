import React from "react";
import '../App.css';

const MODAL_STYLE = {
  position: "absolute",
  backgroundColor: "#FFF",
  display: 'flex',
  flexDirection: 'column',
  zIndex: "1000",
  width: "70vw",
  top: "10%",
  borderRadius: "10px",
};
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

const SPACER_STYLE = {
  height: '100px',
  margin: '0 0 -100px 0',
}

export default function GameModal(props) {
  if (!props.isOpen) return null;

  const handleChildElementClick = (e) => {
    // props.closeModal()
    e.stopPropagation()
  }
  
  const renderArticle = () => {
    return props.content?.map((item, idx) => {
      let paragraphArray = "";
      if (item[1] != null) paragraphArray = item[1].split('\\break')
      return <div key={idx}><h3>{item[0]}</h3>{renderParagraphs(paragraphArray)}</div>
    })
  }

  const renderParagraphs = (paragraphArray) => {
    if (paragraphArray.length < 2) return renderImages(paragraphArray[0])

    return paragraphArray?.map ((paragraph, idx) => {
      return <div key={idx}>{renderImages(paragraph)}</div>
    })
  }

  // /\w+\.\w+/
  const renderImages = (brokenParagraph) => {
    let images = brokenParagraph?.match(/\/\w+\/\w+\/\w+\.\w+/)
    let sectionsSplitByImage = brokenParagraph?.split(/\/\w+\/\w+\/\w+\.\w+/)

    if (sectionsSplitByImage == null || images == null) return <p>{sectionsSplitByImage}</p>

    let result = [];
    for (let i=0; i < images.length; i++)
    {
       result.push(<div><p>{sectionsSplitByImage[i]}</p><img src={process.env.PUBLIC_URL + images[i]}></img></div>)
    }
    result.push(<p>{sectionsSplitByImage[sectionsSplitByImage.length-1]}</p>)
    return result;
  }

  return (
    <>
      <div style={OVERLAY_STYLE} onClick={() => props.closeModal()}>
        <div style={MODAL_STYLE} onClick={(e) => handleChildElementClick(e)}>
          <img src={props.imageURL} className="modalHeader"></img>
          {/* <button onClick={() => props.closeModal()}>Close Modal</button> */}
          <div className="modalContent">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {renderArticle()}
          </div>
          <div style={SPACER_STYLE}></div>
        </div>
      </div>
    </>
  )
}