import connectionDB from "../database/db.js";

export function urlInfoRepository(url, shortUrl, userId){
    return connectionDB.query("INSERT INTO urls (url, short_url, user_id, visit_count) VALUES ($1, $2, $3, $4);", [url, shortUrl, userId, 0]);
}