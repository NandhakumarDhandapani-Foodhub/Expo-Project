import axios from 'axios';

export const baseURL = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const networkcall = {
    endUrl: '/posts/1/comments',
}

export const url = {
    getDatas(value) {
        return baseURL
            .get(networkcall.endUrl)
            .then(response => response)
            .catch(err => err);
    },
};