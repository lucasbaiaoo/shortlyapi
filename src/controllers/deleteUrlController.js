import { deleteUrlRepository, getToBeDeletedUrlOwnerIdRepository } from "../repositories/deleteUrlRepository.js";

export async function deleteUrlController(req, res){
    const urlId = req.params.id;
    const session = res.locals.session;
    const userId = session.rows[0].user_id; 

    try {
        const urlOwnerId = await getToBeDeletedUrlOwnerIdRepository(urlId);
        console.log(urlOwnerId);

        if(urlOwnerId.rowCount === 0){
            res.sendStatus(404);
            return;
        }

        if(urlOwnerId.rows[0].user_id !== userId){
            res.sendStatus(401);
            return;
        }

        await deleteUrlRepository(urlId);
        res.sendStatus(204);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}