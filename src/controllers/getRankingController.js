import { getRankingRepository } from "../repositories/getRankingRepository.js";

export async function getRankingCrontroller(req, res){
    
    try{
        const rankingInfo = await getRankingRepository();

        const ranking = rankingInfo.rows.map((row) => ({
            "id": row.id,
            "name": row.name,
            "linksCount": row.links_count,
            "visitCount": row.visit_count
        }))
    
        res.status(200).send(ranking);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}