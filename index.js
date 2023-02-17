let email = document.getElementById('email')
email = email.href.slice(7)
const params = new URLSearchParams({ email: email })
const right = document.getElementById('right')

const getId = async () => {
  const response = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
  return await response.json()
}

const getImage = async () => {
  const searchParams = new URLSearchParams({ num: await getId() })
  const response = await fetch('https://getxkcd.vercel.app/api/comic?' + searchParams.toString())
  const json = await response.json()
  console.log(json)
  const date = new Date()
  const [img, alt, title] = [json.img, json.alt, json.title]
  console.log(title)
  return [img, alt, title, date.toLocaleString()]
}

const appendImage = async () => {
  const div = document.createElement('div')
  right.appendChild(div)

  const [img, alt, title, date] = await getImage()

  let p = document.createElement('p')
  p.innerText = 'Title: ' + title
  div.appendChild(p)
  p = document.createElement('p')
  p.innerText = 'Image was added at: ' + date
  div.appendChild(p)

  const image = document.createElement('img')
  image.src = img
  image.alt = alt
  image.title = title
  image.className = 'generated-images'
  div.appendChild(image)
}

appendImage().then()