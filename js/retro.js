const retroFunction = async (Query) =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${Query}`);
  const data = await res.json();
  // console.log(data);
  const post = data.posts
  displayFunction(post)
}

const displayFunction = (retros) =>{
    // console.log(retros);
    const KidsRetro = document.getElementById('kids-Unaware');
    KidsRetro.textContent = ''
    retros.forEach(retro => {
      console.log(retro)
      const NewKidsRetro = document.createElement('div');
      NewKidsRetro.classList = `
      w-[642px] mb-6 flex bg-[#797DFC1A] space-x-3 rounded-3xl p-6 border-2 border-[#797DFC] h-[270px]
      `;
      NewKidsRetro.innerHTML = `
      <img class='w-1/4 h-1/2' src="${retro.image}" alt="">
      <div class="space-y-4 "> 
    <div class="flex justify-between text-[#12132DCC] text-xl font-medium">
        <p>${retro.category}</p>
        <p>Author : ${retro.author.name}</p>
    </div>
    <h2 class="text-black text-xl font-bold">${retro.title}</h2>
    <p class="text-[#12132D99] text-base font-normal">${retro.description}</p>
    <hr class="border border-dotted border-[#12132D40]">
        <div class="flex space-x-7">
            <p>
                <i class="fa-regular fa-envelope"></i>
                <span>${retro.comment_count}</span>
            </p>
            <p>
                <i class="fa-regular fa-eye"></i>
                <span>${retro.view_count}</span>
            </p>
            <p>
                <i class="fa-regular fa-clock"></i>
                <span>${retro.posted_time} min</span>
            </p>
             <button Onclick = "ShowModelFunction('${retro.title}','${retro.view_count}')" class="btn bg-gray-200 border-none"><i class="fa-regular fa-envelope-open text-green-600"></i></button>
        </div>
       
    </div>
</div> 
      `
      KidsRetro.appendChild(NewKidsRetro)
    });
    loadingSpainer(false)
}

const loadingSpainer = (isLoading) =>{
    const loading = document.getElementById('loadding_spainer');
    if(isLoading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }
}

const ShowModelFunction = (id,views) =>{
//    console.log(id,views)

const model = document.getElementById('Card-container');
const div = document.createElement('div');
div.classList =('mt-3 flex p-4 bg-white');
div.innerHTML = `
 <p class="text-base font-semibold text-black">${id}</p>
  <p class="flex justify-center items-center gap-2">
                            <i class="fa-regular fa-eye"></i>
                            <span>${views}</span>
                        </p>
`
model.appendChild(div)

}

const handlearFunction = () =>{
    const value = document.getElementById('search-field-id').value;
    loadingSpainer(true)
    retroFunction(value)
}


const LatestPosts = async () =>{
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    LatestPostsFunction(data)
}

const LatestPostsFunction = (posts) =>{
 console.log(posts);
 const latestPost = document.getElementById('latestPost')
 posts.forEach(post => {
    // console.log(post)
const div = document.createElement('div');
div.innerHTML=`
                <div class="w-[344px] space-y-3 p-4 rounded-3xl border-2 border-[#12132D26] h-[482px]">
                    <div class="w-[300px] rounded-2xl h-[190px] bg-[#12132D0D]">
                    <img src="${post.cover_image}" alt="">
                    </div>
                    <p class="text-base font-normal text[#12132D99] space-x-4">
                        <i class="fa-solid fa-soap"></i>
                        <span>29 January 2024</span>
                    </p>
                    <p class="text-lg text-black font-extrabold">${post.title}</p>
                    <p class="text-base font-normal text[#12132D99]">${post.description} </p>
                    <div class="flex justify-between">
                        <img class = "w-1/4 h-1/2" src="${post.profile_image}" alt="">
                       <div>
                        <h2 class="text-base font-bold text-black">${post.author.name}</h2>
                        <h6 class="text-[#12132D99] text-base font-normal">${post?.author?.posted_date}</h6>
                        <h6 class="text-[#12132D99] text-base font-normal">${post.author?.designation}</h6>
                       </div>
                    </div>
                </div>
`
latestPost.appendChild(div)
 });
}

// retroFunction()
LatestPosts()