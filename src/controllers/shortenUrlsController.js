import { nanoid } from "nanoid";
import { urlInfoRepository } from "../repositories/urlInfoRepository.js";

export async function shortenUrlsController(req, res){
    const session = res.locals.session
    const userId = session.rows[0].user_id
    const {url} = req.body;
    const shortUrl = nanoid(8);

    try {
        await urlInfoRepository(url, shortUrl, userId);
    
        res.status(201).send({"shortUrl":shortUrl});
        return;
        }
        catch (error) {
        console.log(error);
        res.sendStatus(500);
      }  
    
}