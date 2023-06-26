const btnEl=document.getElementById('btn')
const container=document.getElementById('image')
const image1=document.getElementById('mages')
const animeName=document.getElementById('animeName')

const url=' https://api.catboys.com/img'

async function getAnime(){
    try {
        btnEl.disabled=true
        btnEl.innerText='Loading...'
        image1.src='spinner.svg'
        animeName.innerText='Updating...'
        const response= await fetch(url).then((res)=>res.json())
        btnEl.disabled=false
        btnEl.innerText='Get Anime'
        container.style.display='block'
        image1.src=response.url
        animeName.innerText=response.artist
    } catch (error) {
        btnEl.disabled=false
        btnEl.innerText='Try Again'
        animeName.innerText='error happened, pls try again'
    }
}

btnEl.addEventListener('click', getAnime)