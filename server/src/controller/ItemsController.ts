import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsControllers {
    async index (request: Request, response: Response)  {
        const items = await knex('items').select('id','titulo', 'image')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                titulo: item.titulo,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
        response.json(serializedItems)
    }
}

export default ItemsControllers