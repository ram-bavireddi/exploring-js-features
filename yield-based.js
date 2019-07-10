import { api } from './api.js';
export function yieldFun(data1El, data2El, data3El) {
    co(_yieldFun.call(null, data1El, data2El, data3El)).then(_ => {
        console.log('logged');
    })
}

function* _yieldFun(data1El, data2El, data3El) {
    yield api.invokeApi(2000, 'Data 1').then(data => {
        data1El.innerHTML = data;
    });
    yield api.invokeApi(4000, 'Data 2').then(data => {
        data2El.innerHTML = data;
    });
    yield api.invokeApi(2000, 'Data 3').then(data => {
        data3El.innerHTML = data;
    });
}
