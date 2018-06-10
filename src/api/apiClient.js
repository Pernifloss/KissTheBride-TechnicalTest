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

    getProducts({start, limit, search}) {
        // consider using https://github.com/sindresorhus/query-string
        return new Promise((resolve, reject) => {
            let paramPrefix = start !== undefined || limit !== undefined ? '?' : '';
            let maybeStartParam = start !== undefined ? `&start=${start}` : '';
            let maybeLimitParam = limit !== undefined ? `&limit=${limit}` : '';
            let maybeSearchParam = search !== undefined ? `&search=${search}` : '';
            this.loadProductData(`${this.apiUri}/products${paramPrefix}${maybeStartParam}${maybeLimitParam}${maybeSearchParam}`, {})
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
