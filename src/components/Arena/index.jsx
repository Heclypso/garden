import { useEffect, useState } from 'react'
import styles from './Arena.module.css'

const Arena = () => {
    const [finalPosition, setFinalPosition] = useState(0)
    const [protagonist, setProtagonist] = useState('')
    const [currentPosition, setCurrentPosition] = useState(0)

    useEffect(() => {
        const cubes = document.querySelectorAll('._arena__cube_1gqpn_13')
        setCurrentPosition(cubes[45].id)
        setProtagonist(cubes[45].children[0])
    }, [])

    useEffect(() => {
        const range = currentPosition - finalPosition

        const allowedValues = [14, 8, 7, 6, 2, 1, -1, -2, -6, -7, -8, -14]

        if (allowedValues.includes(range)) {
            const protagonistDestination = document.querySelector(`._arena__cube_1gqpn_13#${CSS.escape(finalPosition)}`)
            protagonistDestination.append(protagonist)
            setCurrentPosition(protagonistDestination.id)
        }
    }, [finalPosition, currentPosition, protagonist])

    return (
        <div className={styles.arena}>
            <div id='1' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='2' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='3' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='4' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='5' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='6' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='7' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='8' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='9' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}>
                <img className={styles.arena__tree} src="./src/assets/tree.svg" alt="" />
            </div>
            <div id='10' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='11' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}>
                <img className={styles.arena__pumpking} src="./src/assets/pumpking.svg" alt="" />
            </div>
            <div id='12' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='13' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}>
                <img className={styles.arena__tree} src="./src/assets/tree.svg" alt="" />
            </div>
            <div id='14' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='15' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='16' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='17' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='18' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='19' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='20' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='21' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='22' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='23' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='24' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='25' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='26' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='27' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='28' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='29' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='30' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='31' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='32' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='33' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='34' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='35' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='36' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='37' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='38' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='39' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='40' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='41' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='42' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='43' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='44' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='45' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='46' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}>
                <img className={styles.arena__protagonist} src="./src/assets/Protagonist.svg" alt="" />
            </div>
            <div id='47' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='48' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='49' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='50' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='51' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='52' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='53' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='54' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='55' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
            <div id='56' onClick={evento => setFinalPosition(evento.target.id)} className={styles.arena__cube}></div>
        </div>
    )
}

export default Arena