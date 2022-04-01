
const Opciones = (props) => {
    if (props.fin) return <div className="opciones" />
    
    return <div className="opciones">
        <div className="opcion"><button className="botones" onClick={props.callback} value="A">{props.opcionA}</button></div>
        <div className="opcion"><button className="botones" onClick={props.callback} value="B">{props.opcionB}</button></div>
        </div>
    
}

export default Opciones;