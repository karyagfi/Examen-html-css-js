const images = [
  { 
    id: 1,
    src: "https://media.istockphoto.com/id/465377790/es/foto/salto-golden-retriever-cachorro.jpg?s=612x612&w=0&k=20&c=HVymMnER-YmYt4ucnHr-_IMFTkctwJJtjgbNUwUnP9g=",
    title: "Perrito comiendo",
  },
  {
    id: 2,
    src: "https://www.purina.es/sites/default/files/2021-12/Getting-A-Cat1080x608.jpg",
    title: "Gatito durmiendo"
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1437799451/es/foto/lindo-conejito-holland-lop-sentado-y-jugando-en-el-prado-en-el-jard%C3%ADn.jpg?s=612x612&w=0&k=20&c=ppMbEmcBoo3jMvyGjzsERc8G_MCmTVstGgb_xgN6FrU=",
    title: "Conejito jugando",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRGBdAoL9_0DKVhiZqu4MyXKCZ1cTvI2UhQ&s",
    title: "Tortuga bañandose",
  },
  {
    id: 5,
    src: "https://animall.com.mx/cdn/shop/articles/pez_dorado.jpg?v=1735005905",
    title: "Pez nadando"
  },
  {
    "id": 6,
    "src": "https://www.clinicaraza.com/web/image/32394/Gato%20persa%20los%20reyes%20de%20la%20casa%20-%20URGENCIAS%20VETERINARIAS%2024%20HORAS%20-%20Cl%C3%ADnica%20Raza?access_token=d477c3ca-edb7-4d1b-8b1c-7daf62fa8d9f",
    "title": "Gato Persa"
  },
  {
    "id": 7,
    "src": "https://static.wixstatic.com/media/d1fede_70382c2dc86c494f813e41bdaf50aef4~mv2.jpg/v1/fill/w_800,h_598,al_c,q_85/d1fede_70382c2dc86c494f813e41bdaf50aef4~mv2.jpg",
    "title": "Dachshund"
  },
  {
    "id": 8,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-86S3MdGQ79pCFtMEBSzCEEXUm2iwYeWYGQ&s",
    "title": "Gato Bengalí"
  },
  {
    "id": 9,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJENDZvrmbwF4WRFlw_FMNmmPDOs6JYttfA&s",
    "title": "Beagle"
  },
  {
    "id": 10,
    "src": "https://cdn.shopify.com/s/files/1/0268/6861/files/24-12-21-Diferencias-entre-un-gato-persa-y-un-gato-angora_480x480.jpg?v=1713105325",
    "title": "Gato Angora"
  }
]

const gallery = document.getElementById("gallery")
const dialog = document.getElementById("dialog")
const btnClose = document.getElementById("btn-close")
const dialogImg = document.getElementById("dialog-img")

images.forEach((image) => {
  const img = document.createElement("img")
  img.src = image.src
  img.alt = image.title
  img.title = image.title

  img.addEventListener("click", () => {
    dialogImg.src = image.src
    dialog.showModal()   
  })

  gallery.appendChild(img)
})

btnClose.addEventListener("click", () => {
  dialog.close()
})