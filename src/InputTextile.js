function InputTextile(props){

    return(
    
        <div>
    <label forName={props.label}>{props.label}</label>
    <input
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    type={props.type}/>
    </div>
    )
    
    
    }
    
    export default InputTextile