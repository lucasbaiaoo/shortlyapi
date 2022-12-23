import { getUserInfoRepository } from "../repositories/getUserInfoRepository.js";

export async function getUserUrlsController(req, res){
    const session = res.locals.session;
    const userId = session.rows[0].user_id;
    
    try {
        const userInfo = await getUserInfoRepository(userId)
        console.log(userInfo);
        const userVisitsCounts = userInfo.rows.map((row) => row.visit_count);
        let totalVisitCount = 0;

        for(let i = 0; i < userVisitsCounts.length; i++){
            totalVisitCount += userVisitsCounts[i]
        };

        const userUrls = userInfo.rows.map((row) => {const rowCopy = {...row} 
            delete rowCopy.name
            return rowCopy
})
        console.log(userUrls);

        res.status(202).send({
            "id": userId,
            "name": userInfo.rows[0].name,
            "visitCount":totalVisitCount,
            "shortenedUrls":userUrls
        }) 
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}