import { nanoid } from 'nanoid'
import { Url } from '../model/url.model'

/**
 * Service for handling URL-related operations.
 *
 * @class
 */
export class UrlService {
     /**
   * Create a short URL from a provided long URL.
   *
   * @static
   * @async
   * @param {string} long_url - The original long URL.
   * @returns {Promise<object>} A Promise representing the result of the operation.
   * @throws {Error} Throws an error if the URL creation fails.
   */
    static async createUrl(long_url: string) {
        try {
                const short_url = `${process.env.BASE_URL}/${nanoid(3)}`
                const resultSet = await Url.create({ original_url: long_url, short_url: short_url, short_code: short_url.slice(40) })
                return resultSet
        } catch (err) {
            throw new Error('Failed to shorten url')
        }
    }

      /**
   * Retrieve the original URL associated with a short code.
   *
   * @static
   * @async
   * @param {string} shortCode - The short code associated with the URL.
   * @returns {Promise<object|null>} A Promise representing the result of the operation.
   * Returns `null` if the URL is not found.
   * @throws {Error} Throws an error if the URL retrieval fails.
   */
    static async retrieveUrl(shortCode: string) {
        try {
            const resultSet = await Url.findOne({ short_code: shortCode })
            return resultSet
        } catch (err) {
            throw new Error('Failed to retrieve url')
        }
    }
}