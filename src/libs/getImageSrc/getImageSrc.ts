import {BASE_URL} from "@/constants/api";

/**
 * creates full url to load img from remote resource
 * @param imageUrl
 * @return full url
 */
export const getImageSrc = (imageUrl: string) => {
    return BASE_URL + (imageUrl.startsWith('/') ? '' : '/') + imageUrl;
};