import { Request, Response, Router } from "express"

const root = Router()
root.get("/", (_: Request, res: Response): void => {
    res.status(200).json({ message: "Hello World" })
})
root.get("/apples", (_: Request, __: Response): void => {
    throw new TypeError("bruh u just posted cringe")
})
type Route = { router: Router, path: string }
const routes: Route[] = [
    { router: root, path: "/" }
]

export default routes