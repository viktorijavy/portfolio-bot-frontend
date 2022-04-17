import './Button.css'

const Button = props => {
    return (
        <>
           <button className="next-btn"> {props.children}</button>
        </>
    )
}

export default Button;