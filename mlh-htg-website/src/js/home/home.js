import '../../sass/home.scss';

import { girlandfloor, stats1, stats2, stats3, leafonly, trashbinfront, trashbinback } from '../../assets/svgs/svg'
import { motion } from "framer-motion"
import { useHistory } from 'react-router-dom';

export default function Home() {
    const variants = {
        initial: {
            opacity: 0,
            y: '100px',
        },
        visible: (custom) => ({
            opacity: 1,

            y: '0px',
            transition: { delay: custom * 0.4, duration: 0.8 }
        })
    }

    let history = useHistory()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className='home-page' >

            <div className='stats-wrapper'>
                <motion.div custom={0} animate="visible" initial='initial' variants={variants} className='a'>
                    {stats1}
                </motion.div>
                <motion.div custom={1} animate="visible" initial='initial' variants={variants} className='b'>
                    {stats2}
                </motion.div>
                <motion.div custom={2} animate="visible" initial='initial' variants={variants} className='c'>
                    {stats3}
                </motion.div>

            </div>
            <motion.div
                onClick={e => {
                    history.push('/question')
                }}
                animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className='home-start-btn'>
                START NOW
            </motion.div>
            <div className='gnf-wrapper'>
                {girlandfloor}
            </div>
            <div className='trashfront'>{trashbinfront}</div>
            <div className='trashback'>
                {trashbinback}
            </div>
        </motion.div>
    )

}


const circle = (
    <div className='circle'>

        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.4316" cy="20.7783" r="18.5" stroke="#433D43" stroke-width="3" />
        </svg>
    </div>

)

export function Question() {

    let history = useHistory()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className='question-page' >

            <div className='inner'>
                <div className='logo-wrapper'>
                    {leafonly}
                </div>
                <div className='text'>
                    Who are you?
                </div>
                <div className='choices'>
                    <div className='choice'
                        onClick={e => {
                            history.push('/login')
                        }}
                    >
                        {circle}
                        <span> I am a <span> {' '}non-profit {' '}</span> looking to distribute</span>
                    </div>
                    <div className='choice'
                        onClick={e => {
                            history.push('/login')
                        }}
                    >
                        {circle}
                        <span>
                            I am a <span> {' '}restaurant {' '}</span> looking to donate
                        </span>
                    </div>
                    <div className='choice'
                        onClick={e => {
                            history.push('/search')
                        }}
                    >
                        {circle}
                        <span>
                            I am a <span> {' '}hungry person {' '}</span>, looking for food
                        </span>
                    </div>
                </div>


            </div>

        </motion.div>
    )
}
