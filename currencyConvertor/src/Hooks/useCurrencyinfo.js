import { useEffect,useState } from "react";

const API_KEY = `tMV2CSbHYiQjU27J8vZb9aqKUUY5RCTG`;

function useCurrencyInfo(fromCurr,toCurr,amt){
    const [data,setData] = useState({})
    useEffect(() => {
       async function fetchData(){
        let response =  await fetch(`https://api.currencybeacon.com/v1/convert?from=${fromCurr}&to=${toCurr}&amount=${amt}&api_key=${API_KEY}`)
        let result = await response.json();
        console.log(result)
        setData(result.value)
       }
       fetchData();
    },[fromCurr,toCurr,amt])
    // console.log(data)
    return data
}

export default useCurrencyInfo;