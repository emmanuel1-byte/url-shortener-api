import { Request, Response } from "express";
import { UrlService } from "../../services/url.service";
import respond from "../../utils/respond";

export class UrlController {
    static async generateUrl(req: Request, res: Response) {
        try {
            const { long_url, domain } = req.body
            if (!domain) {
                const url = await UrlService.createUrl(long_url)
                if (!url) return respond(res, 500, 'Failed to shorten Url')
                return respond(res, 201, 'Url shortened successfully', { url })
            }
            const url = await UrlService.createUrl(long_url, domain)
            if (!url) return respond(res, 500, 'Failed to shorten Url')
            return respond(res, 201, 'Url shortened successfully', { url })
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to create short url')
        }
    }

    //Retrieve the original url and redirect if url_id param is valid.
    static async getUrl(req: Request, res: Response) {
        try {
            const url_id = req.params.id
            const url = await UrlService.retrieveUrl(url_id)
            if (!url) return respond(res, 404, 'Url not found', { url })
            return res.redirect(url.original_url)
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to retrieve original url')
        }
    }
}