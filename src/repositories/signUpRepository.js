import connectionDB from "../database/db.js";

export function signUpRepository(name, email, hashPassword){
    return connectionDB.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3);", [name, email, hashPassword]);
}

export function emailConflictVerificationRepository(){
    return connectionDB.query("SELECT email FROM users;");
}