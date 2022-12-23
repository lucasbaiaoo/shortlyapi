import connectionDB from "../database/db.js";

export function getRankingRepository(){
    return connectionDB.query("SELECT users.id, users.name, COUNT(urls.user_id) AS links_count, SUM(COALESCE(urls.visit_count, 0)) AS visit_count FROM users LEFT JOIN urls ON users.id = urls.user_id GROUP BY users.id, users.name ORDER BY visit_count DESC NULLS LAST LIMIT 10;")
}