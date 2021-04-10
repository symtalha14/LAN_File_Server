export const Button=({text, type, icon,stateFunc})=>{
    return(
        <button onClick={stateFunc} className="btn" type={type? type: ""}>
            {icon && <span className={"fa fa-"+icon}>&nbsp;</span> }    {text}
        </button>
    )
}