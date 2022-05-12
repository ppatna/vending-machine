

import React, { FC, useState } from 'react';
import './home.css';
import _ from 'lodash';

import coke from '../../img/cola.png'
import drink from '../../img/drink.png'
import water from '../../img/water.png'


const products = [
    {
        "id":1,
        "code_id":"P001",
        "name":"Coke A1",
        "price":15,
        "amount":10,
        "src": coke,
        "className":"one"
    },
    {
        "id":2,
        "code_id":"P002",
        "name":"Coke A2",
        "price":15,
        "amount":10,
        "src": coke,
        "className":"one"
    },
    {
        "id":3,
        "code_id":"P003",
        "name":"Coke A3",
        "price":15,
        "amount":20,
        "src": coke,
        "className":"one"

    },
    {
        "id":4,
        "code_id":"P004",
        "name":"Fruit Mix A1",
        "price":25,
        "amount":25,
        "src": drink,
        "className":"two"
    },
    {
        "id":5,
        "code_id":"P005",
        "name":"Fruit Mix A2",
        "price":25,
        "amount":25,
        "src": drink,
        "className":"two"
    },
    {
        "id":6,
        "code_id":"P006",
        "name":"Fruit Mix A3",
        "price":25,
        "amount":25,
        "src": drink,
        "className":"two"
    },
    {
        "id":7,
        "code_id":"P007",
        "name":"Water A1",
        "price":35,
        "amount":35,
        "src": water,
        "className":"three"
    },
    {
        "id":8,
        "code_id":"P008",
        "name":"Water A2",
        "price":35,
        "amount":25,
        "src": water,
        "className":"three"
    },
    {
        "id":9,
        "code_id":"P009",
        "name":"Water A3",
        "price":35,
        "amount":25,
        "src": water,
        "className":"three"
    }
]
    

const Home: React.FC = () => {
    
    const [productName, setProductName]  = useState(String);
    const [productPrice, setProductPrice]  = useState(Number);
    const [productAmount, setProductAmount]  = useState(Number);
    const [totalSum, setTotalSum] = useState(0);
    const [productSelect, setProductSelect] = useState<any[]>([]);
    const [creditMoney, setCreditMoney] = useState(200);
    const [balanceMoney, setฺBalanceMoney] = useState(0);
    const [isShowAlert, setIsShowAlert] = useState(false);

    const handleChange = (e:any,id:number) => {   
    
        let product = products.filter((item:any) => item.id === id)[0];

        setProductName(product.name)
        setProductPrice(product.price)

       let itemsSelect =  _.filter(productSelect, { 'id': id });
        
           if(itemsSelect.length < 1){
                productSelect.push({
                        "id":id,
                        "count":1
                })

           }else{

                _.forEach(productSelect,(values,idx)=>{
                    if(values.id === id){
                       values.count +=  1    
                    }
                });
           }

           setProductSelect(productSelect)
           countNum()

    };

    const countNum = () => {
        let total = 0
        let countItems = 0;
        let countBalance = 0;

        _.forEach(productSelect,(values)=>{
            let product = products.filter((item:any) => item.id === values.id)[0];

            if(product){
                countItems += values.count
                total += product.price * values.count ;   

                if(total > creditMoney ){
                    setIsShowAlert(true)
                }else{
                    countBalance  =  creditMoney - total;
                }
            }
        });

        setProductAmount(countItems)
        setTotalSum(total)
        setฺBalanceMoney(countBalance)
    }

    const refreshPage = ()=>{
        window.location.reload();
     }

    return (
       <div>
            <div className='head-title'>
                    <h1 >Vending Machine</h1>
                    <span>select what you eat</span>
            </div>
            <div className="machine">
            <div className="items">
                 {products && products.map((item: any, key: number) => (
                    <>
                        <div className="item">
                            <img className="image eA1" src={item.src} alt="" onClick={e => handleChange(e,item.id)}/>
                            <p style={{fontSize:'14px'}}> {item.name}</p>
                            <p> {item.price} ฿</p>
                        </div>
                     </>
          ))}
        </div>

            <div className="order">
                <div className="container">
                    <p>Details</p>
                    <br/>
                    <p> {productName ? productName : 'Select What You Eat'}</p>
                    <br/>
                    <p> Price : {productPrice && productPrice}</p>
                    <br/>
                    <p> Amount : {productAmount && productAmount}</p>
                    <br/>
                    <p> Total Sum : {totalSum} ฿</p>
                    <br/>
                    <p> Credit : {creditMoney} ฿</p>
                    <br/>
                    <p> Balance : {balanceMoney} ฿</p>
                    <br/>
                    <p style={{color:'red'}}> {isShowAlert && 'please top up'}</p>
                    <button onClick={refreshPage}> Refresh </button>
                </div>
                <div className="coins">
                    <div className="money">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>

            <div className="grab">
                <div className="rectangle"></div>
            </div>
            </div>
            </div>
    );
};

export default Home;
