import { SCAppInput } from "./AppInput.styled";

interface IAppInput{
    inputType:string,
    inputPlaceholder?:string,
    readOnly?:boolean,
    value?:string | number
}


export const AppInput = ({inputType,inputPlaceholder,readOnly,value}:IAppInput) => {
    return (
        <SCAppInput type={inputType} value={value}  placeholder={inputPlaceholder} readOnly={readOnly}/>
    );
};
