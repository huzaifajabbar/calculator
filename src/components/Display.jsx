import styles from "./Display.module.css"

export default function Display({dispVal}) {
    return (
        <input className={styles.display} type="text" value={dispVal} readOnly/>
    )
}