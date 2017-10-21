var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var url = "http://www.ivsky.com/";

function download ( url,callback ) {
    http.get( url,function(res){
        var data = "";
        res.on("data",function(chunk){
            data += chunk;
        });
        res.on("end",function(){
            callback(data)
        })
    }).on("error",function(err){
        console.log(err)
    })
}

download( url,function( data ) {
    if(data){
        var $=cheerio.load(data);
        $("img").each(function(i,elem){
            var imgSrc=$(this).attr("src");
            http.get(imgSrc,function(res){
                var imgData="";
                res.setEncoding("binary");
                res.on("data",function(chunk){
                    imgData += chunk;
                });
                console.log(imgData);
                res.on("end",function(){
                    var imgPath="/"+i+"."+imgSrc.split(".").pop();
                    fs.writeFile(__dirname + "/imgs"+imgPath,imgData,"binary",function(err){
                        console.log(err);
                    })
                })

            })
        })
    }
})