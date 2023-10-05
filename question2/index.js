function  resolvedPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve({message :"delay Sucessfully"}),5000)
    })
}

function  reject(){
    return new Promise((resolve,reject)=>{
        setTimeout(reject({error :"delay Exception"}),5000)
    })
}
resolvedPromise().then(msg=>{
    console.log(msg)
})
reject().then().catch(msg=>{
    console.log(msg)
})