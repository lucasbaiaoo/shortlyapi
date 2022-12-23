import connectionDB from "../database/db.js";

export function getToBeOpenedUrlRepository(shortUrl){
    return connectionDB.query("SELECT urls.url, urls.visit_count FROM urls WHERE urls.short_url = $1;", [shortUrl])
}

export function incrementVisitCountRepository(shortUrl){
    return connectionDB.query("UPDATE urls SET visit_count = (visit_count + 1) WHERE urls.short_url = $1;", [shortUrl])
}