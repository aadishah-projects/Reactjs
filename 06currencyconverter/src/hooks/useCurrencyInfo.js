import { useEffect, useState } from "react"

function useCurrencyInfo(currency)
{
    const [data,setData] = useState({})
    //Calling an api
    useEffect(
        () => 
        {
            //Call back function
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                .then(
                (res) => res.json() 
            )
                .then(
                    (res) => {
                        setData(res[currency])
                        console.log(res)
                    } 
                )
        },
        [currency] // Dependencies 
    )
    return data
}

export default useCurrencyInfo;