import React, { useEffect, useState } from 'react';
import "../index.css"
import axios from 'axios';

import "../style.css";
const CalcularDolar = () => {

    const [input, setInput] = useState('')
    const [dolar, setDolar] = useState({})

    const DolarApi = async (e) => {
        e.preventDefault();
        try {
            axios.get(`https://economia.awesomeapi.com.br/json/last/USD`)
                .then(res => {

                    const valordolar = parseFloat(res.data.USDBRL.bid);
                    const valorIpunt = parseFloat(input);

                    const dolarcalculo = valorIpunt * valordolar;
                    console.log(dolarcalculo);
                    setDolar(dolarcalculo);

                })
        } catch (error) { throw error; }
    }

    return (


        <><div>
            <form id="formulario">
                <h1>Calcular Dolar</h1>
                <p><input type="text" name="dolar" value={input} onChange={e => setInput(e.target.value)} /></p>
                <p><button onClick={DolarApi}>Calcular Dólar</button></p>
            </form>
        </div>

            <div id="resultado">
                {dolar !== null && (
                    <p>{dolar} </p>
                )}
            </div></>

    )
}

export default CalcularDolar;



