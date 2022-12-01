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

const handleChildElementClick = (e) => {
  e.stopPropagation()
}

export default function Modal(props) {
  if (!props.isOpen) return null;

  return (
    <>
      <div style={OVERLAY_STYLE} onClick={() => props.closeModal()}>
        <div style={MODAL_STYLE} onClick={(e) => handleChildElementClick(e)}>
          <img src={process.env.PUBLIC_URL + "/assets/images/minecraft.jpg"} className="modalHeader"></img>
          {/* <button onClick={() => props.closeModal()}>Close Modal</button> */}
          <div className="modalContent">
          <h1>Minecraft</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet efficitur erat. Praesent eu mollis erat, et pretium quam. Nam laoreet iaculis velit nec placerat. Aliquam ut magna accumsan, porta sem eget, maximus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dui nisl, maximus ac convallis eget, interdum sed urna. Etiam pellentesque at dolor vitae venenatis. Suspendisse vitae ullamcorper mauris. Nulla facilisis turpis vel metus varius ultricies. Curabitur id interdum augue, et lobortis ante.
          <h3>The Art Direction</h3>
          Suspendisse laoreet, diam sed tincidunt porta, sem tellus ultrices lectus, in auctor mauris nisi at massa. Pellentesque vitae dapibus erat. In hac habitasse platea dictumst. Mauris bibendum orci in urna elementum, ac mattis erat sagittis. Aenean suscipit nisi lacus. <img src={process.env.PUBLIC_URL + "/assets/images/annogameplay.jpeg"}></img>Pellentesque sagittis est arcu, suscipit interdum purus ultricies sit amet. Suspendisse eleifend iaculis odio, eu consectetur erat elementum ut. Pellentesque imperdiet purus eget sapien vulputate, non gravida odio vulputate. Sed rutrum feugiat risus, non vehicula est hendrerit vitae. <br></br>Suspendisse consectetur velit in ipsum posuere, varius sagittis tellus dignissim. Mauris nec dapibus odio. Maecenas sit amet arcu erat. Maecenas consectetur et neque quis semper. Suspendisse fringilla ex eget odio malesuada iaculis. Proin eu augue vel neque efficitur dignissim eget quis nulla.

          Maecenas id diam porta, vulputate eros non, sodales metus. Pellentesque vel nisi non erat vestibulum eleifend. Phasellus lacinia arcu ut neque pulvinar auctor. Curabitur tristique malesuada mauris eu laoreet. Mauris tincidunt risus id pulvinar eleifend. In elementum dolor nec tellus imperdiet, vitae maximus massa tristique. Fusce ac metus vel purus fringilla vestibulum. Nam laoreet dolor felis, in viverra velit elementum non. Quisque iaculis neque vitae ultrices dictum. Nunc sed lectus vulputate, vulputate sem eu, finibus lorem. Nullam non augue viverra, ultricies leo vel, tincidunt tellus.

          Phasellus ultrices ex a arcu consequat fringilla. Nullam purus neque, porttitor a elementum ut, condimentum sit amet dolor. Sed vitae fermentum mauris. Suspendisse suscipit ut metus eu mollis. Morbi non enim facilisis, elementum justo vel, mattis felis. Nulla id varius est. Suspendisse potenti. Nam in vehicula diam. Vivamus dignissim purus vitae tempor egestas. Ut non dictum purus.
          </div>
          <div style={SPACER_STYLE}></div>
        </div>
      </div>
    </>
  )
}