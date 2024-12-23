const fourthItem = document.getElementById("fourth-item");
const fifthItem = document.querySelector("ul li:nth-child(3)");

let fourthClicked = false;
let fifthClicked = false;

// Клік на четвертий елемент
fourthItem.addEventListener("click", function () {
    if (fourthClicked) {
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#000";
    } else {
        this.style.backgroundColor = "#ffcccb";
        this.style.color = "#fff";
    }
    fourthClicked = !fourthClicked;
});

// Клік на п'ятий елемент
fifthItem.addEventListener("click", function () {
    if (fifthClicked) {
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#000";
    } else {
        this.style.backgroundColor = "#3ccfcd";
        this.style.color = "#fff";
    }
    fifthClicked = !fifthClicked;
});


const imgContainer = document.getElementById("myImage");
let imgScale = 1;

// Додати зображення
document.getElementById("addBtn").addEventListener("click", function () {
    const newImg = document.createElement("img");
    newImg.src = imgContainer.src;
    newImg.alt = imgContainer.alt;
    newImg.width = imgContainer.width;
    newImg.style.display = "block";
    newImg.style.margin = "20px auto";
    document.body.appendChild(newImg);
});

// Збільшити зображення
document.getElementById("zoomInBtn").addEventListener("click", function () {
    imgScale += 0.1;
    imgContainer.style.transform = `scale(${imgScale})`;
});

// Зменшити зображення
document.getElementById("zoomOutBtn").addEventListener("click", function () {
    imgScale = Math.max(0.1, imgScale - 0.1);
    imgContainer.style.transform = `scale(${imgScale})`;
});

// Видалити зображення
document.getElementById("removeBtn").addEventListener("click", function () {
    imgContainer.remove();
});
