//import styles from "..styles//components/ImageTextBox.module.css";
//import styles from '../styles/Home.module.css';
const ImageTextBox = (props) => {
    return ( 
        <div className="s" style={{backgroundImage:"url(" + props.img_url + ")"}}>
            <p className="d">{props.text}</p>
        </div>
     );
}
 
export default ImageTextBox;