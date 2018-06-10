export default class APIClient {

    constructor(apiUrl) {
        this.apiUri = apiUrl;
    }

    /**
     * Load Json or text data from the api
     * @param url
     * @param opts
     * @returns {Promise}
     */
    loadData(url, opts = {}) {
        return new Promise((resolve, reject) => {
            fetch(url, opts)
                .then((response) => {
                    const contentType = response.headers.get("content-type");
                    if (response.ok) {
                        if (contentType && contentType.indexOf("application/json") !== -1) {
                            return response.json();
                        } else {
                            return response.text();
                        }
                    } else {
                        reject(new Error("Bad response from server", response.status));
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    loadProductData(url, opts = {}) {
        return new Promise((resolve, reject) => {
            fetch(url, opts)
                .then((response) => {
                    const contentType = response.headers.get("content-type");
                    if (response.ok) {
                        if (contentType && contentType.indexOf("application/json") !== -1) {
                            return response.json().then((data) => {
                                resolve({
                                    data,
                                    count: response.headers.get("X-Pagination-Count"),
                                    start: response.headers.get("X-Pagination-Start"),
                                    limit: response.headers.get("X-Pagination-Limit")
                                });
                            });
                        } else {
                            return response.text();
                        }
                    } else {
                        reject(new Error("Bad response from server", response.status));
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getProducts({start, limit}) {
        // consider using https://github.com/sindresorhus/query-string
        return new Promise((resolve, reject) => {
            this.loadProductData(`${this.apiUri}/products${start !== undefined || limit !== undefined ? '?' : ''}${start !== undefined ? `&start=${start}` : ''}${limit !== undefined ? `&limit=${limit}` : ''}`, {})
                .then(
                    ({data: products, count, start, limit}) => {
                        resolve({products,count, start, limit})
                    })
                .catch(error => {
                    reject(error)
                });
        });
    }
}
