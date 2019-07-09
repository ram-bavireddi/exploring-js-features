import { api } from './api.js';
export function yieldFun(data1El, data2El, data3El) {
    const itr = _yieldFun();
    data1El.innerHTML = itr.next();
    data2El.innerHTML = itr.next();
    data3El.innerHTML = itr.next();
}

function* _yieldFun() {
    yield api.invokeApi(2000, 'Data 1');
    yield api.invokeApi(4000, 'Data 2');
    yield api.invokeApi(2000, 'Data 3');
}
