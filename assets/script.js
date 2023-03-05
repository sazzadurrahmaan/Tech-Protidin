const loadUrl = async() =>{
    const u = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee3a2bf5ce504d70b7438f077347e345");
    const res = await (u.json());
 
    displayData(res.articles);
}
const displayData = (sources)=>{
    const newNewsContainer  = document.getElementById('newNews');
    let sourceCount = 0;
   sources.forEach(source => {
  const newNews = document.createElement('div');
  if(sourceCount <2){

    newNews.classList.add('eachText');
    newNews.innerHTML =`   <div>
    <h4>${source.title}</h4>
    <p>${source.description}</p>
  </div>`
  
  newNewsContainer.appendChild(newNews);
  newNewsContainer;
  sourceCount++;
  } else{
    return 0;
   }
   });
  
}
loadUrl();

document.getElementById("readMButton").addEventListener('click',()=>{
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee3a2bf5ce504d70b7438f077347e345')
    .then(res => res.json())
    .then(data => displayReadMore(data.articles))
})

const displayReadMore = (elements) =>{
const readMore = document.getElementById('readMore');
elements.forEach(element =>{
    const newReadMore = document.createElement('div');
    newReadMore.innerHTML= `
    <p>${element.description}</p>

    `
    readMore.appendChild(newReadMore);
})
}