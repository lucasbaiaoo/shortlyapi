import connectionDB from "../database/db.js";

export function signInInfoVerificationRepository(email){
    return connectionDB.query("SELECT users.id, users.email, users.password from users WHERE users.email = $1;", [email])
}

export function sessionCreationRepository(token, user){
    return connectionDB.query("INSERT INTO sessions (token, user_id) VALUES ($1, $2);", [token, user.rows[0].id])
}