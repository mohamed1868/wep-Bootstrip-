let ul = document.querySelectorAll(".nav-item a")

ul.forEach((el) => {
    el.onclick = function() {
        ul.forEach((ele) => {
            ele.classList.remove("active")
        })
        el.classList.add("active")
    }

})