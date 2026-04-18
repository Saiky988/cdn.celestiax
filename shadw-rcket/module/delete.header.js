// ========= CelestiaX Module ========= //
// Name: Delete RevenueCat ETag
// Version: V1.0.0
// ==================================== //

const headers = $request.headers;
const targetHeader = "X-RevenueCat-ETag";

const clearHeader = (h, key) => {
    const lowKey = key.toLowerCase();
    for (let k in h) {
        if (k.toLowerCase() === lowKey) {
            h[k] = ""; 
            return;
        }
    }
    h[key] = "";
};

clearHeader(headers, targetHeader);

$done({ headers });
