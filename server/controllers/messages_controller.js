let messages = [];
let id = 0;

module.exports = {
    create:(req,res)=>{
        const {text,time,person} = req.body;
        messages.push({id,text,time,person});
        id++;
        res.status(200).send(messages);
    },
    read:(req,res)=>{
        res.status(200).send(messages);
    },
    update:(req,res)=>{
        const {id} = req.params;
        const {body} = req;
        messages=messages.map((message)=>{
            if(message.id === +id){
                message.text=body.text;
            }
            return message
        })
        res.status(200).send(messages)
    },
    delete:(req,res)=>{
        const {id} = req.params;
        messages=messages.filter((message)=>message.id !== +id);
        res.status(200).send(messages);
    }   
    
}