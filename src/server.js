import express from "express";
import helmet from "helmet";
import logger from "morgan";


try {
    const app = express()

app.use (helmet)
app.use(logger('dev'))
app.use (express.json)
console.log('pppp')
app.listen('8080',()=>{console.log('done')})

} catch (error){
    console.log(error,'ååjjdkfoså')
}
