import { getToBeOpenedUrlRepository, incrementVisitCountRepository} from "../repositories/openUrlRepository.js";

export async function  openUrlController(req, res){
    const shortUrl = req.params.shortUrl

    try {
        const url = await getToBeOpenedUrlRepository(shortUrl);

        if(url.rowCount === 0){
            res.sendStatus(404);
            return;
        };

        await incrementVisitCountRepository(shortUrl);
        res.redirect(url.rows[0].url)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}