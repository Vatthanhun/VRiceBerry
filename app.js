const progressEl = document.querySelector(".progress")
window.onscroll = () => scrollProgress()

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop / pageHeight)*100
    // console.log(pageHeight, scrollTop, scrollPercentage)
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercentage+"%"
}

const scroolBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll", showBtn)
scroolBtn.addEventListener("click", scrollToTop)

function showBtn(){
    // console.log("Scrolling")
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal > 0.3) {
        scroolBtn.classList.add("show-btn")
    } else {
        scroolBtn.classList.remove("show-btn")
    }
}

function scrollToTop() {
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}