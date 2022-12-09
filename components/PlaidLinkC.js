import React, { Component, useState } from "react";
import { usePlaidLink, PlaidLink } from "react-plaid-link";
import axios from "axios";

export default function PlaidLinkC() {
    const [transactions, setTransactions] = useState(Object)
    const handleOnSuccess = (public_token, metadata) => {
        // send token to client server
        axios.post("/auth/public_token", {
            public_token: public_token
        });
    }

    const handleOnExit = () => {
        // handle the case when your user exits Link
        // For the sake of this tutorial, we're not going to be doing anything here.
    }

    const handleClick = (res) => {
        axios.get("/transactions").then(res => {
            this.setState({ transactions: res.data });
        });
    }

    return (
        <div>
            <PlaidLink
                clientName="React Plaid Setup"
                env="sandbox"
                product={["auth", "transactions"]}
                publicKey="add your public key here"
                onExit={handleOnExit}
                onSuccess={handleOnSuccess}
                className="test"
            >
                Open Link and connect your bank!
            </PlaidLink>
            <div>
                <button onClick={handleClick}>Get Transactions</button>
            </div>
        </div>
    )
}

// class PlaidLinkC extends Component {
//     constructor() {
//         super();

//         this.state = {
//             transactions: []
//         };

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleOnSuccess(public_token, metadata) {
//         // send token to client server
//         axios.post("/auth/public_token", {
//             public_token: public_token
//         });
//     }

//     handleOnExit() {
//         // handle the case when your user exits Link
//         // For the sake of this tutorial, we're not going to be doing anything here.
//     }

//     handleClick(res) {
//         axios.get("/transactions").then(res => {
//             this.setState({ transactions: res.data });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <PlaidLink
//                     clientName="React Plaid Setup"
//                     env="sandbox"
//                     product={["auth", "transactions"]}
//                     publicKey="add your public key here"
//                     onExit={this.handleOnExit}
//                     onSuccess={this.handleOnSuccess}
//                     className="test"
//                 >
//                     Open Link and connect your bank!
//                 </PlaidLink>
//                 <div>
//                     <button onClick={this.handleClick}>Get Transactions</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default PlaidLinkC;