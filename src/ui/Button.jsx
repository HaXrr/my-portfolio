import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'

export default function Button ({Btn}){
    return(
        <button className="border-[1px] border-primary text-[1.4rem] p-[0.8rem] hover:text-primary">{Btn} <FontAwesomeIcon icon={faShareFromSquare} /></button>
    )
}