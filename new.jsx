const Para=()=>{
    return (
        <div>
        <h1>Learn web development</h1>
        </div>
    )
}

const Main=()=>{
   const arr=[
    "Welcome to the MDN learning area. This set of  articles aims to guide complete beginners to web development with all that they need to start coding websites.",

   "The aim of this area of MDN is not to take you from beginner to expert but to take you from beginner to comfortable. From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.",
   "If you are a complete beginner, web development can be challenging we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
]

return (
<div style={{width:"50%", margin:"40px", marginLeft:"25%", boxShadow:"10px 5px 5px"}}>
    <Para/>
    {
        arr.map((iteam)=>{
            return <p>{iteam}</p>
        })
    }
</div>
);
}
ReactDOM.render(<Main/>,document.getElementById("root"))