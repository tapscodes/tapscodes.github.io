import Image from "next/image";
import Link from "next/link";
/*Params:
-href = place to link to
-src = image source path
-target = target image param
-width = image width
-height = image height
-fill = image fill
*/
const ImageLink = (props) => {
    return ( 
        <Link href={props.href}><a target={props.target}><Image src={props.src} width={props.width} height={props.height} fill={props.fill}/></a></Link>
     );
}
 
export default ImageLink;