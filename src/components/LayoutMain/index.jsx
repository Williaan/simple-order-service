import './styles.css';


export function LayoutMain(props) {
    return (
        <section className="container_main">
            {props.children}
        </section >
    );
}
