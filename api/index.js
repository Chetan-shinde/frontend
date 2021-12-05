const express = require('express')
const LRU = require('lru-cache')

// Create express instance
const app = express()


app.get('/getJSON', (req, res)=>{
    res.send({data:'data'});
});

app.use(function(req, res, next){
    
    let cachePage = new LRU({ 
        max: 500
        , maxAge: 1000 * 60 * 60 
    });
   
    let body = '';

    
    if(['/en/', '/en', '/de', '/de/'].includes(req.path)){
        const existsHtml = cachePage.get('homeData'); 
        //console.log(cachePage.keys());      
        if (existsHtml) {
            //console.log("cached data ");
            return res.end(existsHtml.html, 'utf-8')           
        }else{
            //console.log("no cahcing");
            res.original_end = res.end
            // rewrite res.end
                 res.end = function (data) {
            if (res.statusCode === 200) {
            // Set cache
                    cachePage.set('homeData', { html: data})
            }
            //console.log(data);
            // The final result is returned
                   res.original_end(data, 'utf-8')
            }
        }
    }

    next();

});



// Export express app
module.exports = app
