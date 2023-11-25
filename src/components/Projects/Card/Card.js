

export default function Card (props) {
    // const { imgSrc } = props;
    // const photo = props.imgSrc;

    return (
        <div className="Card">
            <a className="__frame" href={props.href}>
                <div className="__container">
                    <img 
                        src={props.imgSrc}
                        alt={props.alt} 
                    />
                </div>
            </a>
            <h2>{props.title}</h2>
            {/* <p>{props.desc}</p> */}
        </div>
    )
}