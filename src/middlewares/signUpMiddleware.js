import { signUpSchema } from "../models/signUpModel.js";

export async function signUpMiddleware(req, res, next){
    const validation = signUpSchema.validate(req.body, {abortEarly: false});
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}

