import React from "react";
import Historia from './Historia';
import Data from "./data.json";
import Opciones from './Opciones'



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historial : "",
            contador: 1
        }
        this.selectOption.bind(this);
    };  
    getById = (id) => {
        return Data.find(a => a.id === id)
    };

    selectOption = (event) => {
        if (this.state.contador === 5) return;
        
        this.setState({
            "historial" : this.state.historial + event.target.value,
            "contador": this.state.contador + 1
        })
    }

    deshacer = () => {
        this.setState({
            "historial" : this.state.historial.slice(0, this.state.historial.length-1), 
            "contador": this.state.contador - 1
        })
    }
    render = () => {
        let index = this.state.historial ? (this.state.contador) + this.state.historial.slice(-1).toLowerCase() : "1"
        let actual = this.getById(index)
        return <div className={this.props.className}>
            <Historia historia={actual.historia}/>
            <Opciones opcionA={actual.opciones.a} opcionB={actual.opciones.b} callback={this.selectOption} fin={this.state.contador===5}/>
            <div className="recordatorio">Historial: {this.state.historial}</div>
            <button className={this.state.contador === 1 ? "hidden" : "botones"} onClick={this.deshacer}>Deshacer</button>
        </ div>
        
    };
    componentDidUpdate() {
        console.table(this.state);
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
}


export default Game;