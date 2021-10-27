import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

/* GET todos listing. */


router.get('/', todosCtrl.index)
router.get('/:id', todosCtrl.show);


export {
  router
}
