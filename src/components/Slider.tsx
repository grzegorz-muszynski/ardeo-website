import React, { ReactElement } from 'react';
const images = require.context('../assets/slider', false);
const imageList = images.keys().map(image => images(image));

export default function Slider(): ReactElement {

    return (
        <section id="Slider">
            <div className="__track">
                {imageList.map((image, index) => (
                    <div className="__icon" key={'Container' + index}>
                        <img key={index} src={image} alt={`Strony i aplikacje Małopolska ${index}`} />
                    </div>
                ))}

                {/* Duplication of icons above */}
                {imageList.map((image, index) => (
                    <div className="__icon" key={'Container' + index + '00'}>
                        <img key={index + '00'} src={image} alt={`Strony i aplikacje Małopolska | 2.${index}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}