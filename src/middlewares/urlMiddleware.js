import { urlSchema } from "../models/urlModel.js";

export async function urlMiddleware(req, res, next){
    const validation = urlSchema.validate(req.body, {abortEarly: false});
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}