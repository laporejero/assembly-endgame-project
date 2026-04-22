import clsx from "clsx"

export default function Status(props) {
    return (
        <>
            <h2>{props.headline}</h2>
            <p className={props.class}>{props.message}</p>
        </>
        // <section className={clsx("game-status", props.className)}>
            
        // </section>
    )
}