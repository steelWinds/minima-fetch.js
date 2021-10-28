class NetworkError extends Error {
    constructor(message, status) {
        super(message || 'Error');

        this.name = this.constructor.name;
        this.status = status || 'Status unknow';
    }
}

export { NetworkError };
