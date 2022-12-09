import nextConnect from 'next-connect';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import moment from 'moment';

const PLAID_CLIENT_ID = process.env.NEXT_PUBLIC_PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.NEXT_PUBLIC_PLAID_SECRET_SANDBOX;
const PLAID_PUBLIC_KEY = process.env.NEXT_PUBLIC_PLAID_PUBLIC_KEY;
const PLAID_ENV = process.env.NEXT_PUBLIC_PLAID_ENV;

var ACCESS_TOKEN = null;
var ITEM_ID = null;

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    apiKey: PLAID_CLIENT_ID,
    username: 'user_good',
    password: 'pass_good',
    accessToken: ACCESS_TOKEN,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
            'PLAID-SECRET': PLAID_SECRET,
            'Plaid-Version': '2020-09-14',
        },
    },
});

const client = new PlaidApi(configuration);

const handler = nextConnect();

handler.post(async (req, res) => {
    client
        .transactionsSync(req)
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
    const { metadata, public_token, userEmail } = req.body;
    // const { institution, accounts } = metadata;
    // const { name, institution_id } = institution;

    // try {

    if (public_token) {
        const r = await client.exchangePublicToken(public_token, function (error, tokenResponse) {
            // console.log('client: ', client);
            console.log('error: ', error);
            console.log('tokenResponse: ', tokenResponse);
            ACCESS_TOKEN = tokenResponse.access_token;
            ITEM_ID = tokenResponse.item_id;
            console.log(ACCESS_TOKEN);

            // Pull transactions for the last 30 days
            let startDate = moment()
                .subtract(30, "days")
                .format("YYYY-MM-DD");
            let endDate = moment().format("YYYY-MM-DD");
            console.log('ACCESS TOKEN ->', ACCESS_TOKEN);
            client.getTransactions(
                ACCESS_TOKEN,
                startDate,
                endDate,
                {
                    count: 250,
                    offset: 0
                },
                function (error, transactionsResponse) {
                    const { transactions } = transactionsResponse;
                    // TRANSACTIONS LOGGED BELOW! 
                    // They will show up in the terminal that you are running the server in
                    console.log('transactions:', transactions);
                    res.json({
                        ok: true,
                        message: 'Success!',
                        access_token: ACCESS_TOKEN,
                        item_id: ITEM_ID,
                        transactions: transactions
                    })

                }
            );
        })
        console.log('r', r);
            // .catch(err => res.json({
            //     ok: false,
            //     message: err.toString(),
            // })); // Plaid Error
    }
    // } catch (err) {
    //     res.json({
    //         ok: false,
    //         message: err.toString(),
    //     });
    // }
});

export default handler;
