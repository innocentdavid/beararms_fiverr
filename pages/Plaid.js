import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Plaid = props => {
    console.log(process.env.NEXT_PUBLIC_PLAID_PUBLIC_KEY);
    const onSuccess = useCallback((token, metadata) => {
        // send token to server
        console.log(token);
    }, []);

    const config = {
        clientName: 'playground-react-plaid-link',
        env: 'sandbox',
        product: ['auth', 'transactions'],
        publicKey: process.env.NEXT_PUBLIC_PLAID_PUBLIC_KEY,
        onSuccess,
        // ...
    };

    const { open, ready, error } = usePlaidLink(config);

    return (
        <>
            <button onClick={() => { open(); console.log('clicked');}} disabled={false} style={{ cursor: 'pointer'}}>
                open
            </button>
        </>
    );
};

Plaid.displayName = 'Plaid';

export default Plaid;