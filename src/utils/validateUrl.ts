import { NextFunction, Request, Response } from "express";
import respond from "./respond";

export function validateUrl(req: Request, res: Response, next: NextFunction){
    try{
        const { long_url } = req.body
        new URL(long_url)
        next()
    }catch(err){
        return respond(res, 400, 'Url is malformed')
    }
}