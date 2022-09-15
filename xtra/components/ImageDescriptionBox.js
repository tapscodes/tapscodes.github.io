import styles from "../../styles/components/ImageDescriptionBox.module.css";
/*
Params:
-img_url = image source path
-target = target link param
-href = link for image
-header = header for textbox
-text = text for textbox
*/
const ImageDescriptionBox = (props) => {
    return ( 
        <div className={styles.box}>
            <div className={styles.image} style={{backgroundImage:"url(" + props.img_url + ")"}}>
                <a href={props.href} target={props.target}>You Should Never See This Text, It's Just Here To Make The Image A Link</a>
            </div>
            <div className={styles.textbox}>
                <h1>{props.header}</h1>
                <p>{props.text}</p>
            </div>
        </div>
     );
}
 
export default ImageDescriptionBox;