type Offsets = {
    [key: string]: number[];
};

const offsets:Offsets = {
//  '<Section>': [<offsets for different thresholds: 0-576, 577-768, ...>]
    'Home': [0, 0, 0, 0, 0, 0],
    'About': [785, 785, 785, 785, 785, 785],
    'Projects': [1580, 1580, 1720, 1720, 1720, 1720],
    'Contact': [3620, 3640, 2900, 2900, 2850, 2500],
}

export default function menuScrolling (e) {
    let screenWidth = window.innerWidth; // Number
    let height;

    switch (true) {
        case screenWidth > 1400:
            height = offsets[e.target.dataset.height][5];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 1200:
            height = offsets[e.target.dataset.height][4];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 992:
            height = offsets[e.target.dataset.height][3];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 768:
            height = offsets[e.target.dataset.height][2];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 576:
            height = offsets[e.target.dataset.height][1];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        default:
            height = offsets[e.target.dataset.height][0];
            window.scrollTo({ top: height, behavior: "smooth" });
    }
}