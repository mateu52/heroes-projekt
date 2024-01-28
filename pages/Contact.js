import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { Montserrat } from 'next/font/google'

const MontFont = Montserrat({ subsets: ['latin'] })
export default function Contact() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message});
        setSubmitted(true)
    }
    if(submitted) {
        return <p>Wysłano</p>
    }
    return (
        <div className={styles.container}>
            <p className={styles.container_p}>Contact form</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_container}>
                    <label htmlFor='name' className={styles.label_n}>Imię:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div>
                        <label htmlFor='email' className={styles.label}>Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.message}>
                        <label htmlFor='message' className={styles.label_m}>Wiadomość:</label>
                        <textarea
                            className={styles.input}
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type='submit' className={`${styles.submit} ${MontFont.className}`}>Wyślij</button>
                </div>
            </form>
        </div>
    )
}