import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0o7A-Wh0f5hHGHzir3rVrw9hurxEUqFbPDZ90Wrhk9wr9cqJX_2MDkwwI3lYi_-coX3EMyVUOT4n9phXep5IJmn-uL8Re9PrpSh74lD1fXVndQtGek8kq2BrV_ECYHYx',
    }
});