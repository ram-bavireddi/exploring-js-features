import { asyncFun } from './async-await.js';
import { yieldFun } from './yield-based.js';
import { promiseFun } from './promise-based.js';

(async function myFun() {
    const { data1El, data2El, data3El, dataReadyToastEl } = init();
    // await asyncFun(data1El, data2El, data3El);
    // dataReadyToastEl.style.display = 'block';
    // promiseFun(data1El, data2El, data3El).then(_ => {
    //     dataReadyToastEl.style.display = 'block';
    // });
    yieldFun(data1El, data2El, data3El);
})();

function init() {
    const data1El = $('#data1');
    const data2El = $('#data2');
    const data3El = $('#data3');
    const dataReadyToastEl = $('.data-ready-toast');
    on(dataReadyToastEl, 'click', $event => {
        dataReadyToastEl.style.display = 'none';
    })
    return { data1El, data2El, data3El, dataReadyToastEl };
}

function $(selector) {
    return document.querySelector(selector);
}

function on(el, eventType, callback) {
    el.addEventListener(eventType, callback);
}