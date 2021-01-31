import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer  iHdfoGrdqs4kdV2EfB4VyMR6WeMhUhuOo8wATrWC9pmo-JlF_TB7y0dGSSpSdWKc4W1lWD_Cydy-ze2PGoRjVP-C1we8TYZcCCn9oxDEK5RiwZbnnDRxijPxqUQEYHYx'
    }
});
