import express , {Request , Response} from "express"

const app = express();


app.use(express.json())


app.get('/', (req: Request,res: Response) => {
    res.status(200).json({ success:true, message: "Api rodando"   })
} )

app.listen(5555, () =>{
    console.log("Server running port :5555")
} )