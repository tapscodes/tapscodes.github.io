import styles from "../../styles/components/ImageDescriptionBox.module.css";
import ImageLink from "./ImageLink";
/*
Params:
-src = image source path
-href = link for image
-target = target image param
-width = image width
-height = image height
-fill = image fill
-text = text for textbox
*/
const ImageDescriptionBox = (props) => {
    return ( 
        <div className="box">
            <div className="image">
                <ImageLink href={props.href} target={props.target} src={props.src} width={props.width} height={props.height}/>
            </div>
            <div className="textbox">
                <p>{props.text}</p>
            </div>
        </div>
     );
}
 
export default ImageDescriptionBox;