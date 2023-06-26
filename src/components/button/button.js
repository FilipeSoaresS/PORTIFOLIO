import './button.css'

function Button (props) {
    return (
        <nav>
            <div>{props.children}</div>       
        </nav>
    );

};

export default Button;