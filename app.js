let apiKey = 'f8b6e6e3f6cd413bb6e9c8e5b02d8f83';
const newsform = document.querySelector("#form-news");  
const container = document.querySelector(".container");
const newsarr = ["business","general","health","sports", "technology", "gaming","politics","entertainment"];


axios(`https://newsapi.org/v2/top-headlines?category=&language=en&apiKey=${apiKey}
`)
.then((res)=>{
console.log(res.data);
res.data.articles.map((news) =>{
 return  container.innerHTML +=`<div class="news-card">
       <img src="${news.urlToImage}" alt="News Image">
     <div class="news-card-content">
   <h3>${news.author}</h3>
<h6>Title: ${news.title}</h6>
</br>
   <h6>Description: ${news.description}</h6>
   </br>
   <h6>${news.content}</h6>
   <a href="${news.url}" target="_blank">
   <i class="fas fa-newspaper"></i> Read More
   </a>
   </div>
   </div>`
})
}).catch((err) =>{
console.log(err);



})



