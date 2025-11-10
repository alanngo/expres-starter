
function run()
{
    local ROUTEPATH=${1:-"anotherRoute"}
    local OUTPUT="src/routes/$ROUTEPATH.ts"
    if [ -e "$OUTPUT" ]; then
        echo "$OUTPUT already exists, exiting..." && return -1
    else
        echo "import { Request, Response, Router } from 'express';

    const $ROUTEPATH = Router()
    $ROUTEPATH.get('/', (_: Request, res: Response) =>{
        res.json({message: '$ROUTEPATH'})
    })
    export default $ROUTEPATH" >> $OUTPUT
    echo "{ router: $ROUTEPATH, path: "/$ROUTEPATH" }"
    fi
}
run $*


