const offsets = {
//  '<Section>': [<offsets for different thresholds: 0-576, 577-768, ...]
    'Home': [0, 100, 200, 200, 200, 1000],
    'About': [0, 100, 200, 200, 200, 1000],
    'Projects': [500, 600, 200, 600, 200, 1000],
    'Contact': [0, 100, 200, 200, 200, 1000],
}

export default function menuScrolling (e) {
    let screenWidth = window.innerWidth; // Number
    
    if (screenWidth > 1400) {
        let height = offsets[e.target.dataset.height][5];
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 1200) {
        let height = offsets[e.target.dataset.height][4];
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 992) {
        let height = offsets[e.target.dataset.height][3];
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 768) {
        let height = offsets[e.target.dataset.height][2];
        window.scrollTo({ top: height, behavior: "smooth" });
    } else if (screenWidth > 576) {
        let height = offsets[e.target.dataset.height][1];
        window.scrollTo({ top: height, behavior: "smooth" });
    } else {
        let height = offsets[e.target.dataset.height][0];
        window.scrollTo({ top: height, behavior: "smooth" });
    }
}