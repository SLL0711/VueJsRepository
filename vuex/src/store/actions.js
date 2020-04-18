export default {
    incrementAsync(context){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('异步回调执行结束...')
                resolve()
            },2*1000)
        })
    }
}