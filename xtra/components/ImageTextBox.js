import styles from "../../styles//components/ImageTextBox.module.css";
const ImageTextBox = (props) => {
    return ( 
        <div className={styles.interest} style={{backgroundImage:"url(" + props.img_url + ")"}}>
            <p>{props.text}</p>
        </div>
     );
}
 
export default ImageTextBox;