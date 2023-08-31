const images = require.context('../assets/slider', false);
const imageList = images.keys().map(image => images(image));

export default function Slider () {

    return (
        <section id="Slider">
            <div className="__track">
                {imageList.map((image, index) => (
                    <div className="__icon">
                        <img key={index} src={image} alt={`Strony i aplikacje Małopolska ${index}`} />
                    </div>
                ))}

                {/* Duplication of icons above */}
                {imageList.map((image, index) => (
                    <div className="__icon">
                        <img key={index + '00 '} src={image} alt={`Strony i aplikacje Małopolska | 2.${index}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}