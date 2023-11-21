export default function menuScrolling (e) {
    let screenWidth = window.innerWidth; // Number
    
    if (screenWidth > 1400) {
        let height = Number(e.target.dataset.height5);
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 1200) {
        let height = Number(e.target.dataset.height4);
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 992) {
        let height = Number(e.target.dataset.height3);
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 768) {
        let height = Number(e.target.dataset.height2);
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 576) {
        let height = Number(e.target.dataset.height1);
        window.scrollTo({ top: height, behavior: "smooth" });
    } else {
        let height = Number(e.target.dataset.height);
        window.scrollTo({ top: height, behavior: "smooth" });
    }
}