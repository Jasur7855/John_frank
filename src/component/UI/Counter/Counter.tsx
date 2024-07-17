import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { SCCount } from "./Counter.styled";

interface ICounter{
    count:number
    increment:()=>void
    decrement:()=>void
}


export const Counter = ({count, increment, decrement}:ICounter) => {
    return (
        <SCCount >
            <CiCirclePlus size={24} style={{ cursor: "pointer" }} onClick={increment}/>
             <span>{count}</span>
            <CiCircleMinus  size={24} style={{ cursor: "pointer" }} onClick={decrement}/>
        </SCCount >
    );
};
