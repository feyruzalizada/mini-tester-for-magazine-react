import React, { useState } from 'react';

const TransactionModule = () => {
    const [amount, setAmount] = useState(0);
    //OZUM YAZMISAM COMMITI
    //bilerekten kodu qiriram test elemek ucun
    if (amount > 100) {
        throw new Error("Transaction is too large! Limit exceeded.")
    }
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h4>💳 Transaction Module (Fintech)</h4>
            <p>Transaction amount: ${amount}</p>
            <button onClick={() => setAmount(amount + 500)}>Add 500$</button>
        </div>
    );
};

export default TransactionModule;