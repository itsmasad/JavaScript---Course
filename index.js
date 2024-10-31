let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true; // or false, depending on the operation
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});
