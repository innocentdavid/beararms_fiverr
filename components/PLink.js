import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { PlaidLink, usePlaidLink } from "react-plaid-link";
import fetchSwal from '../lib/fetchSwal';

const PLink = ({ }) => {
    const [transactions, setTransactions] = useState(Object);
    const PLAID_CLIENT_ID = process.env.NEXT_PUBLIC_PLAID_CLIENT_ID;
    const PLAID_SECRET = process.env.NEXT_PUBLIC_PLAID_SECRET_SANDBOX;
    const config = {
        key: "8f7a18223de3e92047b48da5f95494",
        clientName: 'playground-react-plaid-link',
        env: 'sandbox',
        product: ['auth', 'transactions'],
        // publicKey: process.env.NEXT_PUBLIC_PLAID_PUBLIC_KEY,
        onSuccess: handleOnSuccess,
        // ...
    };
    const { open, ready } = usePlaidLink(config);

    // open Link immediately when ready
    useEffect(() => {
        if (ready) {
            open();
        }
    }, [ready, open]);
    
    function handleOnSuccess(public_token, metadata) {
        // send token to client server
        fetchSwal
            .post('/api/plaid', {
                public_token: public_token,
                metadata: metadata,
            })
            .then((res) => {
                if (res.ok !== false) {
                    setTransactions({ transactions: res.transactions });
                    //redirectTo('/');
                }
            });
    }

    function handleOnExit() {
        // handle the case when your user exits Link
        // For the sake of this tutorial, we're not going to be doing anything here.
    }

    function handleClick(res) {
        // send token to client server
        // fetchSwal
        //     .post('/api/plaid', {
        //         public_token: 'innocent',
        //         metadata: null,
        //     })
        //     .then((res) => {
        //         if (res.ok !== false) {
        //             setTransactions({ transactions: res.transactions });
        //             //redirectTo('/');
        //         }
        //     });
        console.log('transactions:', transactions);
    }
    return (
        <div>
            {/* <PlaidLink
                clientName="React Plaid Setup"
                env="sandbox"
                product={["auth", "transactions"]}
                publicKey={process.env.NEXT_PUBLIC_PLAID_PUBLIC_KEY}
                onExit={handleOnExit}
                onSuccess={handleOnSuccess}
                style={{}}
                className="mt-5 bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            >
                Connect your bank!
            </PlaidLink> */}
            <div>
                <button
                    onClick={handleClick}
                    className="mt-5 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                >
                    View Transactions</button>
            </div>
        </div>
    )
}

export default PLink;