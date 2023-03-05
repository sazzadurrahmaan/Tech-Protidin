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
document.getElementById('readMButton').addEventListener("click",()=>{
   fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee3a2bf5ce504d70b7438f077347e345")
   .then(res => res.json())
   .then(data => displayReadMore(data.articles))
})
const displayReadMore = (elements)=>{
    const displayContainer = document.getElementById('readMore');
    elements.forEach(element => {
        const newCard = document.createElement('div');

       newCard.innerHTML = `
       <div>
       <a href="${element.url}" target="_blank"></a>
       <p>${element.description}</p>
       </div>
        `
        displayContainer.appendChild(newCard);
    });
        
   
}


