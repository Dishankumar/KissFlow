const dogImageDiv = document.getElementById("dogImage")
const btn = document.getElementById("btn")
fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {

  dogImageDiv.innerHTML = `<img src="${json.message}" height=500px width=500px \>`
})
getClick = () => {
  fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {

    dogImageDiv.innerHTML = `<img src="${json.message}" height=500px width=500px \>`
  })
}
btn.onclick = () => getClick()

console.log('hello')