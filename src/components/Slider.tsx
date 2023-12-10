import { ReactElement } from 'react';

// Define a type for the Webpack context
interface imagesContext {
  keys(): string[];
  (id: string): string;
  resolve(id: string): string;
}

// Making TypeScript aware of the require.context
const images = require.context('../assets/slider/better-format', false) as imagesContext;

// Use the defined type
const imageList: string[] = images.keys().map((image: string) => images(image));

export default function Slider(): ReactElement {

    return (
        <section id="Slider">
            <div className="__track">
                {imageList.map((image: string, index: number) => (
                    <div className="__icon" key={'Container' + index}>
                        <img key={index} src={image} alt={`Strony i aplikacje Małopolska ${index}`} />
                    </div>
                ))}

                {/* Duplication of icons above */}
                {imageList.map((image: string, index: number) => (
                    <div className="__icon" key={'Container' + index + '00'}>
                        <img key={index + '00'} src={image} alt={`Strony i aplikacje Małopolska | 2.${index}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}