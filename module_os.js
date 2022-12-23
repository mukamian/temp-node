const os=require('os')

console.log(os.userInfo());
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
}

console.log(currentOS);