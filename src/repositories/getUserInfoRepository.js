import connectionDB from "../database/db.js";

export function getUserInfoRepository(userId){
    return connectionDB.query("SELECT users.name, urls.id, urls.url, urls.short_url, urls.visit_count FROM users JOIN urls ON users.id = urls.user_id WHERE users.id = $1;", [userId])
}