import { api } from './api.js';
export function promiseFun(data1El, data2El, data3El) {
    const pr1 = api.invokeApi(2000, 'Data 1').then(data => {
        data1El.innerHTML = data;
    });
    const pr2 = api.invokeApi(4000, 'Data 2').then(data => {
        data2El.innerHTML = data;
    });
    const pr3 = api.invokeApi(2000, 'Data 3').then(data => {
        data3El.innerHTML = data;
    });

    return Promise.all([pr1, pr2, pr3]);
}
