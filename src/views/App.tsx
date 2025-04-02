import type { UserState } from './types';
import { useState } from 'react';
import styles from './App.module.css';
import { Data } from './Data';

export function App() {
    const [user, setUser] = useState<UserState>("unset");

    const fetchUser = async () => {
        const data = await fetch("https://randomuser.me/api?nat=en")
            .then((response) => response.json())
            .then((data) => data.results[0])
            .catch(() => setUser("error"));

        if (!data) return ;

        setUser({
            picture: data.picture.medium,
            email: data.email,
            name: data.name,
            gender: data.gender,
            location: {
                city: data.location.city,
                state: data.location.state,
                country: data.location.country
            }
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Données Utilisateur
                </h1>
                <div className={styles.body}>
                    {
                        typeof user !== "object" ? (
                            <div className={styles.placeholder}>
                                {
                                    (user === "error" && "Aucune donnée pour le moment") ||
                                    (user === "unset" && "Impossible de récupérer les données")
                                }
                            </div>
                        ) : (
                            <Data user={user} />
                        )
                    }
                </div>
                <div className={styles.footer}>
                    <button onClick={() => fetchUser()}>
                        Récupérer les données
                    </button>
                </div>
            </div>
        </div>
    )
}
