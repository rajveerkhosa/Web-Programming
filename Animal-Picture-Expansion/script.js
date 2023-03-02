function showImage(image)
{
    let path = "./images/" + image + ".png"
    let imgTag = document.getElementById("fullview");
    imgTag.src = path; 
}
