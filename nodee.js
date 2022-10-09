const http =require('http');
const fs= require('fs');
const { buffer } = require('stream/consumers');
const server=http.createServer((req,res)=>{

	const url =req.url;
	const method=req.method;

	fs.readFile("message.text",{encoding:"utf-8"}, (err,data)=>{
		if(err){
		console.log(err)
		}
	if(url==='/')
	{
	res.setHeader('Content-Type','text/html')
	res.write('<html>')
	res.write('<head><title>My first page</title></head>')
	res.write(`<body> ${data}</body}`)
	res.write('<body><form action="/messaage" method="POST", id="IO"><input type="text" name="message"><button type="submit">Sent</button></form></body>')
	res.write('</html>')
	}
})


	if(url==="/messaage" && method==='POST'){
		
		const body=[];
		req.on('data',((chunk)=>{
				console.log(chunk)
				body.push(chunk);
		}));

		req.on('end',(()=>{
			const parsedBody=Buffer.concat(body).toString();
			console.log(parsedBody)
			const mes=parsedBody.split('=')[1]
			fs.writeFileSync("message.text",mes);
			res.write('')

			

		}));

	res.statusCode=302;
	res.setHeader('Location','/')
	return res.end();
	}
	
console.log(req.url,req.method)
})
server.listen(4000)



