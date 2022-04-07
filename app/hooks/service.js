import axios from "axios";


export const client = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

export async function serviceGet(resource) {
    // retrieve a resource
    console.log("API GET: ", resource)
    return client.get(resource)
}

export async function servicePost(resource, body) {
    // create a resource
    console.log("API POST: ", resource, body)
    return client.post(resource, body)
}

export async function servicePut(resource, body) {
    // update a resource
    console.log("API PUT: ", resource, body)
    return client.put(resource, body)
}

export async function serviceDelete(resource) {
    // delete a resource
    console.log("API DELETE: ", resource)
    return client.delete(resource)
}

/*
test user: Antonette
test password: Shanna@melissa.tv
*/
