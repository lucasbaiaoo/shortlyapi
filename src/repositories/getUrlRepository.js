import connectionDB from "../database/db.js";

export function getUrlRepository(urlId){
    return connectionDB.query("SELECT urls.short_url, urls.url FROM urls WHERE urls.id = $1;", [urlId])
}