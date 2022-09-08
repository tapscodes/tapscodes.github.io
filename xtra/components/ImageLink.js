import Image from "next/image";
import Link from "next/link";
/*Params:
-href = place to link to
-src = image source path
-width = image width
-height = image height
*/
const ImageLink = (props) => {
    return ( 
        <Link href={props.href}><a><Image src={props.src} width={props.width} height={props.height}/></a></Link>
     );
}
 
export default ImageLink;