function changeLayout() {
    if (window.innerHeight < 717) {
        document.querySelector(".bookmarksBtn").parentElement.style.display = "none";
    }
    if (window.innerHeight < 668) {
        document.querySelector(".premiumBtn").parentElement.style.display = "none";
    }
    if (window.innerHeight < 769) {
        document.querySelector(".creatorstudioBtn").parentElement.style.display = "none";
    }
} 

async function main() {
    changeLayout();
}

main();