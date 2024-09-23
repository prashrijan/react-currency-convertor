import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    useEffect(
        () => {
            fetch(`https://v6.exchangerate-api.com/v6/c944667d86eab591694a5ad3/latest/${currency}`)
                .then(res => res.json())
                .then(res => setData(res["conversion_rates"]))
                .catch(err => console.log(err))
        },[currency])

        console.log(data); 
        return data
}

export default useCurrencyInfo