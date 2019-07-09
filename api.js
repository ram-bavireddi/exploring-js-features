class Api {
    simulateApi(timeout, response) {
        return new Promise((resolve, resject) => {
            setTimeout(() => { resolve(response); }, timeout);
        });
    }

    invokeApi(timeout, data) {
        return this.simulateApi(timeout, data);
    }
}

export const api = new Api();
