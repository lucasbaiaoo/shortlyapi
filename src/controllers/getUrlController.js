import { getUrlRepository } from "../repositories/getUrlRepository.js";

export async function getUrlController (req, res){
    const urlId = req.params.id;

    try{
        const url = await getUrlRepository(urlId)

        if(url.rowCount === 0){
            res.sendStatus(404);
            return;
        }

        res.status(200).send({"id": urlId, "shortUrl": url.rows[0].short_url, "url": url.rows[0].url})
    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}