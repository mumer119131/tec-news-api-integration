

fetch('https://news-pvx.herokuapp.com/')
    .then(response => response.json())
    .then(data => setDataToContainer(data))
    .catch(err => console.error(err));


const setDataToContainer = async (data) => {
    
    const news_div = document.createElement('div');
    for(const key in data){
       if(key != 'about'){
        const news_h = document.createElement('h2');
        news_h.innerHTML = "● " + key;
        news_div.appendChild(news_h);
        var key_data = data[key];
        for (const news in key_data){
            const news_p = document.createElement('p');
            news_p.innerHTML = key_data[news];
            news_div.appendChild(news_p)

        }
    }
    }
    document.getElementById('news_container').appendChild(news_div) 
}