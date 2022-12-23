const {readFileSync,writeFileSync}=require('fs');
console.log('start');
const firstFile=readFileSync('./content/first.txt','utf8');
const secondFile=readFileSync('./content/second.txt','utf8');


writeFileSync('./content/result-sync.txt',`here is the result of the two files: ${firstFile} ; ${secondFile}`)
console.log('done with this task');
console.log('starting with next task');