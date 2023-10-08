import './layoutForm.css';


export function LayoutForm(props) {
    return (
        <section className="container_register">
            <div className="content_register">
                {props.children}
            </div>
        </section >
    );
}
