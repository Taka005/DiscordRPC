const { Client } = require("discord-rpc")
const client = new Client({ transport: "ipc" })

client.on("ready",()=>{
    client.setActivity({
        details: "ランクマッチ - 残り4部隊",
        //state: "",
        
        largeImageKey:"logo",
        largeImageText:"Apex Legends",

        //smallImageKey:"",
        //smallImageText:"",

        startTimestamp: Date.now(),
        //endTimestamp:,
        buttons:[
            {
                label:"参加",
                url:"https://unko.co.jp"
            }
        ]
    })
})

client.login({clientId : "890169882514169886"})
    .catch((error)=>console.log(error));