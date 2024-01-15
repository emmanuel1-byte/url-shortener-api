import { Request, Response } from "express";
import { UrlService } from "../../services/url.service";
import respond from "../../utils/respond";

/**
 * Controller handling URL-related operations.
 *
 * @class
 */
export class UrlController {
     /**
   * Generate a short URL from a provided long URL.
   *
   * @static
   * @async
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} A Promise representing the completion of the operation.
   */
    static async generateUrl(req: Request, res: Response) {
        try {
            const { long_url } = req.body
                const shortUrl = await UrlService.createUrl(long_url)
                if (!shortUrl) return respond(res, 500, 'Failed to shorten Url')
                return respond(res, 201, 'Url shortened successfully', { short_url: shortUrl.short_url })
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to create short url')
        }
    }

      /**
   * Retrieve the original URL associated with a short code.
   *
   * @static
   * @async
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} A Promise representing the completion of the operation.
   */
    static async getUrl(req: Request, res: Response) {
        try {
            const shortCode = req.params.code
            const url = await UrlService.retrieveUrl(shortCode)
            if (!url) return respond(res, 404, 'Url not found', { url })
            return res.redirect(url.original_url)
        } catch (err) {
            return respond(res, 500, 'Internal Server Error: Failed to retrieve original url')
        }
    }
}