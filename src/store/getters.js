
// 过滤数据但是不改变数据
export default{
    changePeople: (state) =>{
        return state.people.filter(item=>{
            if(item.age>30){
                return true
            }
        })
    }
}