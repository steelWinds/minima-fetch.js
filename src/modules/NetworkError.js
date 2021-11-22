class NetworkError extends Error {
    constructor(message, status, errors) {
        super(message || 'Error');

        this.name = this.constructor.name;
        this.status = status || 'Status unknow';
        this.errors = errors || null;
    }
}

export { NetworkError };
