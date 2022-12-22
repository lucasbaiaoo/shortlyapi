import connectionDB from "../database/db.js";

export function authRepository(token){
    return connectionDB.query("SELECT * FROM sessions WHERE sessions.token = $1;", [token])
};