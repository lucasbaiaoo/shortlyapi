import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().alphanum().required(),
    confirmPassword: joi.string().alphanum().required()
});