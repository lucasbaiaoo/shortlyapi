import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { signInInfoVerificationRepository, sessionCreationRepository } from "../repositories/signInRepository.js";

export async function signInController(req, res) {
    const {email, password}= req.body;
    const token = uuid();
  
    try {
      const user = await signInInfoVerificationRepository(email);

      if(user.rowCount === 0 || !bcrypt.compareSync(password, user.rows[0].password)){
        res.status(401).send("Email ou senha incorretos.");
        return
      }

      await sessionCreationRepository(token, user)
      res.status(200).send(token);

    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };