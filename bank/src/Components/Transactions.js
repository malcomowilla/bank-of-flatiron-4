import React, { useEffect, useState } from "../../public/node_modules/@types/react"
import TransactionItem from "./TransactionItem"

function Transactions() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch("https://api.npoint.io/d923c245336df0873f37/transactions")

            .then(r => r.json())
            .then(transc => setTransactions(transc))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <table>
                <tr>
                    <th>DATE</th>
                    <th>CATEGORY</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                </tr>
                {/* trs */}
                {transactions.map((transaction,index)=>{
                    return <TransactionItem 
                    index={index}
                    date={transaction.date}
                    category={transaction.category}
                    description={transaction.description}
                    amount={transaction.amount}
                    key={transaction.id}
                    />
                })}
            </table>
        </>
    )
}
export default Transactions;

