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
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }


    getProducts() {
        return new Promise((resolve, reject) => {

            this.loadData(`${this.apiUri}/products`, {})
                .then(products => {
                    resolve(products)
                })
                .catch(error => {
                    reject(error)
                });
        });
    }
}
