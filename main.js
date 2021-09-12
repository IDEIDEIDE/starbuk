img = ""

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(640, 420)
    canvas.center()


}


function draw(){
    image(img, 0,0, 640, 420)
    fill("red")
    text("dog", 250, 90)
    noFill()
    rect(120, 60, 420, 300)
    stroke("red")

}