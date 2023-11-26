export default function Card (props) {

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
        </div>
    )
}