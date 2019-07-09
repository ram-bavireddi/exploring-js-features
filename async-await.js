import { api } from './api.js';
export async function asyncFun(data1El, data2El, data3El) {
    const res1 = await api.invokeApi(2000, 'Data 1');
    data1El.innerHTML = res1;
    const res2 = await api.invokeApi(4000, 'Data 2');
    data2El.innerHTML = res2;
    const res3 = await api.invokeApi(2000, 'Data 3');
    data3El.innerHTML = res3;
}
