import { signInSchema } from "../models/signInModel.js";

export async function signInMiddleware(req, res, next){
    const validation = signInSchema.validate(req.body, {abortEarly: false});
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}
