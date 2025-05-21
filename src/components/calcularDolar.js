import React, { useState } from 'react';
import axios from 'axios';

const CalcularDolar = () => {
    const [input, setInput] = useState('');
    const [dolar, setDolar] = useState(null);

    const DolarApi = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://economia.awesomeapi.com.br/json/last/USD-BRL`);
            const valorDolar = parseFloat(res.data.USDBRL.bid);
            const valorInput = parseFloat(input);

            if (isNaN(valorInput)) {
                alert("Digite um valor válido.");
                return;
            }

            const dolarCalculo = valorInput * valorDolar;
            console.log(dolarCalculo);
            setDolar(dolarCalculo);
        } catch (error) {
            console.error("Erro ao buscar a cotação do dólar:", error);
        }
    };

    return (
        <form onSubmit={DolarApi} id="formulario">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite o valor em reais"
            />
            <button type="submit">Converter</button>
            {dolar !== null && (
                <p>Valor Convertido em dólar: ${dolar.toFixed(2)}</p>
            )}
        </form>
    );
};

export default CalcularDolar;