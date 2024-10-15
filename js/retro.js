const retroFunction = async () =>{
    const res = await fetch (" https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const post = data.posts;
    displayFunction(post)
}

const displayFunction = (retros) =>{
    console.log(retros)
   
}

retroFunction()