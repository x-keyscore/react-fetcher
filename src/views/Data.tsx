import styles from './Data.module.css';
import { User } from './types';

interface DataProps {
    user: User;
}

export function Data({ user }: DataProps) {
    return (
        <div className={styles.container}>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Prénom</label>
                <span className={styles.fieldValue}>{user.name.first}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Nom</label>
                <span className={styles.fieldValue}>{user.name.last}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>City</label>
                <span className={styles.fieldValue}>{user.location.city}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>State</label>
                <span className={styles.fieldValue}>{user.location.state}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Country</label>
                <span className={styles.fieldValue}>{user.location.country}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Genre</label>
                <span className={styles.fieldValue}>{user.gender}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <span className={styles.fieldValue}>{user.email}</span>
            </section>
            <section className={styles.field}>
                <label className={styles.fieldLabel}>Picture</label>
                <img className={styles.fieldPicture} src={user.picture} alt={user.name.first} />
            </section>
        </div>
    )
}


