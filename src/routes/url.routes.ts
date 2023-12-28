import express from 'express'
import { UrlController } from '../controller/url/url.controller'
import { validateUrl } from '../utils/validateUrl'
const router = express.Router()

router.post('/', validateUrl, UrlController.generateUrl)

router.get('/:id', UrlController.getUrl)

export default router