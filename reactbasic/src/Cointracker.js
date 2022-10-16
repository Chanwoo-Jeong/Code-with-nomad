import { useEffect, useState } from "react"

function Cointracker (position) {
    const[ loading , setLoding ] =useState(true)
    const [coins, setCoins] = useState([])
    useEffect(()=>{fetch("https://api.coinpaprika.com/v1/tickers")
                        .then((respose)=>{return respose.json()})
                        .then((json)=>{
                            setCoins(json)
                            setLoding(false)})
                    },[])
    return (
        <div>
            <h1>Cointracker({coins.length})</h1>
            {loading? <strong>loading...</strong> : null}
            <ul>
                {coins.map((coin)=><li key={coin.id}>{coin.name}({coin.symbol}):${coin.quotes.USD.price}USD</li>)}
            </ul>
        </div>
    )
}

export default Cointracker