import connectionDB from "../database/db.js";

export function getToBeDeletedUrlOwnerIdRepository(urlId){
    return connectionDB.query("SELECT user_id FROM urls WHERE urls.id = $1;", [urlId])
}

export function deleteUrlRepository(urlId){
    return connectionDB.query("DELETE FROM urls WHERE urls.id = $1;", [urlId])
}