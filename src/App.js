import React, {Component} from 'react';

class Function extends Component {
     
 state = {
    nome: "Luiz"
}

frase = (individuo) => {
    return (`Você mandou bem, ${individuo}!`)
}


dobro = (x) => {return x*2}


    render() {
        return (
           <div>
                <h1>{this.frase(this.state.nome)}</h1>
                <h2>{this.dobro(5)}</h2>
           </div>
        ) 
    }
}

export default Function