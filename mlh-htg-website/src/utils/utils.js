import { createApi } from "unsplash-js";

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "5f2zmD2PP-Zqd3MZUCAN-hXS04jFnqIg3WofN11W02A"
});

export function getPhotoUrl(query = 'restaurant', orientation = 'squarish') {
    api.search
        .getPhotos({ query: query, orientation: orientation })
        .catch(() => {
            console.log("something went wrong!");
        });
}