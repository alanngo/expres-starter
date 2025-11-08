ROUTEPATH=${1:-"anotherRoute"}
echo "
import { Request, Response, Router } from 'express';

const $ROUTEPATH = Router()
$ROUTEPATH.get('/$ROUTEPATH', (_: Request, res: Response) =>{
    res.json({message: '$ROUTEPATH'})
})
export default $ROUTEPATH" >> "src/routes/$ROUTEPATH.ts"