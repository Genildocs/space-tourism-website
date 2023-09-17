const obj =[{
  "name": "Mars",
  "images": {
    "png": "./assets/destination/image-mars.png",
    "webp": "./assets/destination/image-mars.webp"
  }},
  {
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-mars.png",
      "webp": "./assets/destination/image-mars.webp"
    }
}
]

obj.map((item)=>{
  if(item.name === 'Mars') console.log(item)
  console.log(item)
})