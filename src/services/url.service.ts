import { nanoid } from 'nanoid'
import { Url } from '../model/url.model'


export class UrlService {
    static async createUrl(long_url: string, domain?: string) {
        try {
            if (!domain) {
                const short_url = `${process.env.BASE_URL}${nanoid(3)}`
                const resultSet = await Url.create({ original_url: long_url, short_url: short_url, short_code: short_url.slice(22) })
                return resultSet
            }
            const short_url = `${process.env.BASE_URL}${domain}`
            const resultSet = await Url.create({ original_url: long_url, short_url: short_url, short_code: short_url.slice(22) })
            return resultSet
        } catch (err) {
            throw new Error('Failed to shorten url')
        }
    }

    static async retrieveUrl(shortCode: string) {
        try {
            const resultSet = await Url.findOne({short_code: shortCode})
            return resultSet
        } catch (err) {
            console.error(err)
            throw new Error('Failed to retrieve url')
        }
    }
}