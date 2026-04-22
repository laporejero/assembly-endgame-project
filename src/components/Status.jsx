import clsx from "clsx"

export default function Status(props) {
    return (
        <section className={clsx("game-status", props.className)}>
            <h2>{props.headline}</h2>
            <p>{props.message}</p>
        </section>
    )
}