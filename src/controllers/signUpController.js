import bcrypt from "bcrypt";
import { emailConflictVerificationRepository, signUpInfoRepository } from "../repositories/signUpRepository.js";

export async function signUpController(req, res) {
    const {name, email, password, confirmPassword} = req.body;

    try {
        const usersEmails = await emailConflictVerificationRepository();
    
        for (let i = 0; i < usersEmails.rows.length; i++) {
          if (usersEmails.rows[i].email === email) {
            res.sendStatus(409);
            return;
          }
        }
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
    
    if(password !== confirmPassword){
        res.sendStatus(422);
        return;
    };

    const hashPassword = bcrypt.hashSync(password, 10);
  
    try {
      await signUpInfoRepository(name, email, hashPassword)
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };