import './Button.css'

const Button = props => {
    return (
        <>
            <button disabled={props.disabled} className="next-btn"> {props.children}</button>
        </>
    )
}

export default Button;