import styles from "../../styles//components/ImageTextBox.module.css";
/*
Params:
-img_url = path to image/image url
-text = text for textbox
*/
const ImageTextBox = (props) => {
    return ( 
        <div className={styles.interest} style={{backgroundImage:"url(" + props.img_url + ")"}}>
            <p>{props.text}</p>
        </div>
     );
}
 
export default ImageTextBox;