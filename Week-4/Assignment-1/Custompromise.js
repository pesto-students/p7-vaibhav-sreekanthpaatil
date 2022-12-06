const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}

function isThenable(val) {
    return val instanceof MyPromise;
}

class MyPromise {
    constructor(callback) {
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];
        try {
            callback(this._resolve, this._reject);
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve = (value) => {
        this.updateResult(value, STATE.FULFILLED);
    }

    _reject = (error) => {
        this.updateResult(error, STATE.REJECTED);
    }

    updateResult(value, state) {
        // This is to make the processing async
        setTimeout(() => {
            // process the promise if it is still in pending state
            if (this.state !== STATE.PENDING) {
                return;
            }

            // check is value is also a promise
            if (isThenable(value)) {
                return value.then(this._resolve, this._reject);
            }

            this.value = value;
            this.state = state;

            // execute handlers if already attached
            this.executeHandlers();
        }, 0);
    }