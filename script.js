let filters ={
    brightness :{
        value: 100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast:{
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
        
    },
    saturation:{
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    huerotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg",
    },
    blure: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px",
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%",
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },

}

const imageCanvas = document.querySelector("#image-canvas")
const imageInput = document.querySelector("#image-input")
const canvasCtx = imageCanvas.getContext("2d")
const resetButton= document.querySelector("#reset-btn")
const downloadButton= document.querySelector("#download-btn")
const presetsContainer = document.querySelector(".presets")


let file=null
let image=null

const filtersContainer = document.querySelector(".filters")

function createFilterElement(name, unit = "%" , value, min, max){
    const div = document.createElement("div")
    div.classList.add("filter")


    const input= document.createElement("input")
    input.type = "range"
    input.max = max
    input.min = min
    input.value = value
    input.id = name


    const p = document.createElement("p")
    p.innerText=name

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input", (event) =>{
        filters[ name ].value = input.value
        applyFilters()
    })

    return div

}

function createFilters(){

Object.keys(filters).forEach(key =>{

    const filterElement = createFilterElement(key, filters[key].unit , filters[key].value, filters[key].min, filters[key].max)
    // console.log(filterElement)
    filtersContainer.appendChild(filterElement)


})

}

createFilters()

imageInput.addEventListener("change", (event)=>{
    file=event.target.files[0]
    const imagePlaceHolder=document.querySelector(".placeholder")
    imageCanvas.style.display="block"
    imagePlaceHolder.style.display="none"

    const img = new Image()
    img.src=URL.createObjectURL(file)

    img.onload =() =>{
        image=img
        imageCanvas.width=img.width
        imageCanvas.height=img.height
        canvasCtx.drawImage(img,0,0)

    }
})


function applyFilters() {

    if (!image) return   

    
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)

//     canvasCtx.filter =`
//     brightness(${filters.brightness.value}${filters.brightness.unit})
//     contrast(${filters.contrast.value}${filters.contrast.unit})
//     saturate(${filters.saturation.value}${filters.saturation.unit})
//     hue-rotatate(${filters.huerotation.value}${filters.huerotation.unit})
//     blur(${filters.blure.value}${filters.blure.unit})
//     grayscale(${filters.grayscale.value}${filters.grayscale.unit})
//     sepia(${filters.sepia.value}${filters.sepia.unit})
//     opacity(${filters.opacity.value}${filters.opacity.unit})
//     invert(${filters.invert.value}${filters.invert.unit})
    

// `.trim()


canvasCtx.filter = `
brightness(${filters.brightness.value}%)
contrast(${filters.contrast.value}%)
saturate(${filters.saturation.value}%)
hue-rotate(${filters.huerotation.value}deg)
blur(${filters.blure.value}px)
grayscale(${filters.grayscale.value}%)
sepia(${filters.sepia.value}%)
opacity(${filters.opacity.value}%)
invert(${filters.invert.value}%)
`.trim()


    canvasCtx.drawImage(image, 0, 0)
}


resetButton.addEventListener("click" ,() => {
    filters ={
    brightness :{
        value: 100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast :{
        value: 100,
        min:0,
        max:200,
        unit:"%",
        
    },
    // exposure : {
    //     value: 100,
    //     min:0,
    //     max:200,
    //     unit:"%",
    // },
    saturation :{
        value: 100,
        min:0,
        max:200,
        unit:"%",
    },
    huerotation : {
        value: 0,
        min:0,
        max:360,
        unit:"deg",
    },
    blure : {
        value: 0,
        min:0,
        max:20,
        unit:"px",
    },
    grayscale : {
        value: 0,
        min:0,
        max:100,
        unit:"%",
    },
    sepia : {
        value: 0,
        min:0,
        max:100,
        unit:"%",
    },
    opacity : {
        value: 100,
        min:0,
        max:100,
        unit:"%",
    },
    invert : {
        value: 0,
        min:0,
        max:100,
        unit:"%",
    },

}



applyFilters()

filtersContainer.innerHTML=""

createFilters()

})

downloadButton.addEventListener("click",() =>{
    const link = document.createElement("a")
    link.download="edited-image.png"
    link.href=imageCanvas.toDataURL()
    link.click()
})


const presets = {
    drama:{
        brightness: 110,
        contrast: 130,
        saturation: 120,
        huerotation: 0,
        blure: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },


    vintage:{
        brightness: 90,
        contrast: 110,
        saturation: 80,
        huerotation: 15,
        blure: 0,
        grayscale: 20,
        sepia: 40,
        opacity: 100,
        invert: 0,
    },


    oldSchool:{
        brightness: 95,
        contrast: 120,
        saturation: 60,
        huerotation: 0,
        blure: 0,
        grayscale: 50,
        sepia: 30,
        opacity: 100,
        invert: 0,
    },



    cyberpunk:{
        brightness: 110,
        contrast: 140,
        saturation: 160,
        huerotation: 290,
        blure: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },



    softGlow:{
        brightness: 120,
        contrast: 90,
        saturation: 110,
        huerotation: 0,
        blure: 2,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0,
    },



    noir:{
        brightness: 80,
        contrast: 130,
        saturation: 0,
        huerotation: 0,
        blure: 0,
        grayscale: 100,
        sepia: 10,
        opacity: 100,
        invert: 0,
    },



    warmSunset:{
        brightness: 105,
        contrast: 115,
        saturation: 120,
        huerotation: 20,
        blure: 0,
        grayscale: 0,
        sepia: 30,
        opacity: 100,
        invert: 0,
    },


    coolTone:{
        brightness: 100,
        contrast: 110,
        saturation: 90,
        huerotation: 200,
        blure: 0,
        grayscale: 5,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },



    faded:{
        brightness: 185,
        contrast: 80,
        saturation: 70,
        huerotation: 0,
        blure: 0,
        grayscale: 10,
        sepia: 20,
        opacity: 100,
        invert: 0,
    },



    retroPop:{
        brightness: 115,
        contrast: 130,
        saturation: 150,
        huerotation: 45,
        blure: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },


}

Object.keys(presets).forEach(presetsName => {
    const presetButton = document.createElement("button")
    presetButton.classList.add("btn")
    presetButton.innerText = presetsName
    presetsContainer.appendChild(presetButton)


    presetButton.addEventListener('click', () =>{
        const preset = presets[presetsName]

        Object.keys(preset).forEach(filterName =>{
            filters[filterName].value = preset[filterName]

            const slider = document.getElementById(filterName)
            if (slider) slider.value = preset[filterName]

        })

        applyFilters()
    })
})


