

import React, { FC, useEffect, useState } from 'react';


const product = [
    {
        "code_id":"P001",
        "name":"Coke",
        "price":15,
        "amount":10
    },
    {
        "code_id":"P002",
        "name":"Milk",
        "price":15,
        "amount":10
    },
    {
        "code_id":"P003",
        "name":"Coconut water",
        "price":15,
        "amount":20
    },
    {
        "code_id":"P004",
        "name":"Coconut water",
        "price":25,
        "amount":25
    }
]
    

const Home: React.FC = () => {

    const [codeId, setCodeID] = useState('');
    const [productName, setProductName]  = useState('');

    const [fiveCoin, setFiveCoin] = useState(0);
    const [tenCoin, setTenCoin] = useState(0);
    const [twentyCoin, setTwentyCoin] = useState(0);
    const [totalSum, setTotalSum] = useState(0);


    const onSubmit = (e:any) =>{
        e.preventDefault();

        // let totalOfMoney = fiveCoin + tenCoin;

        console.log("fiveCoin: "+fiveCoin);

        // console.log("10"+tenCoin);
        // console.log("20"+twentyCoin);
        // setTotalSum(totalOfMoney)
        
    }

    const handleChange = (e: any, setter: (data: any) => void) => {   
        console.log("e.target.value:"+e.target.value);
        
        setter(e.target.value);
    };

    return (
       <div>
           <p>Vending Machine</p>
           <form onSubmit={onSubmit}>
            <label>
                <p> Product Code:
                <input type="text" name="codeId" id="CodeId"  onChange={e => handleChange(e, setCodeID)}/>
                </p>
            </label>
            <label>
                Top Up:
                <button value="5" name="fiveCoin" id="fiveCoin" onClick={e => handleChange(e, setFiveCoin)} >5</button>
                <button  value="10" name="tenCoin" id="tenCoin" onClick={e => handleChange(e, setTenCoin)} >10</button>
                <button  value="20" name="twentyCoin" id="twentyCoin" onClick={e => handleChange(e, setTwentyCoin)} >20</button>
            </label>
            <p>
            <label>
                Credit (Money):  Baht
            </label>
            </p>
           
            <p>
            <input type="submit" value="Submit" />
            </p>
           
            </form>
        </div>
    );
};

export default Home;
