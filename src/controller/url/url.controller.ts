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
                return respond(res, 201, 'Url shortened successfully', { short_url: url.short_url })
            }
            const url = await UrlService.createUrl(long_url, domain)
            if (!url) return respond(res, 500, 'Failed to shorten Url')
            return respond(res, 201, 'Url shortened successfully', { short_url: url.short_url })
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to create short url')
        }
    }

    static async getUrl(req: Request, res: Response) {
        try {
            const shortCode = req.params.code
            const url = await UrlService.retrieveUrl(shortCode.slice(48))
            if (!url) return respond(res, 404, 'Url not found', { url })
            return res.redirect(url.original_url)
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to retrieve original url')
        }
    }
}