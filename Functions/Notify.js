const axios = require('axios');

exports.notiEvent = async(token, message)=> {
    try{
        const res = await axios({
            method: 'POST',
            url:'https://notify-api.line.me/api/notify',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '+ token
            },
            data:"message=" + message
        })

        // console.log('notify response', res)
    }catch(err){
        console.log(err)
    }
};