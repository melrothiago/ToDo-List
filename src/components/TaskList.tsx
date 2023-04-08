import styles from './Tasks.module.css'

export function TaskList() {
    return (
        <div className={styles.taskList}>
            <button>Check</button>

            <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. 
            Duis vel sed fames integer.
            </p>

            <button>apagar</button>
        </div>
    )
}