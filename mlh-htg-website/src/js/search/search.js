import '../../sass/search.scss';
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from 'react'
import { searchOrgbyName } from '../../utils/firebaseFunctions'
import { firestore } from '../../utils/firebase'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useForm } from "react-hook-form";
import OrgProfile from '../dashboard/OrgProfile'

import { searchSetAddressAtom } from '../../utils/atoms'
import {
    useSetRecoilState,
    useRecoilValue
} from 'recoil'
import { toast } from 'react-toastify';

export default function Search() {


    const [orgData, setOrgData] = useState()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        if (data.searchQuery == '') {
            setOrgData(ogData.current)
            return
        }
        var resultData = searchOrgbyName(data.searchQuery)
        resultData.then(newdata => {

            if (data === 'Not found') {
                toast('Not Found!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setOrgData(ogData.current)
            } else {
                console.log(newdata)
                setOrgData([newdata])
            }
        })
    };

    var ogData = useRef()

    useEffect(() => {
        //first load get everything
        const colRef = firestore.collection('hackathonstuff/mlhhtg2021/nonprofits').limit(25)
        colRef.get().then(snapshot => {
            setOrgData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            ogData.current = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            console.log(ogData)
        })
    }, [])

    console.log(orgData)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='search-page' >
            <div className='search-inner'>
                <div className='header'>
                    <div>
                        <span>
                            food near me
                        </span>
                        <span className='results-count'>
                            (123)
                        </span>
                    </div>
                    <div className='divider' />
                </div>
                <div className='content'>
                    <div className='left'>
                        <div className='search-wrapper dashboard-card'>
                            <div className='title'>
                                search by organization, time, or day
                            </div>
                            <div className='input-wrapper'>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input name='searchQuery' type='text' ref={register} />
                                </form>
                            </div>
                            <div className='search-btn'>
                                SEARCH
                            </div>
                        </div>

                        <div className='results-list-wrapper'>
                            <PerfectScrollbar>
                                <div id={"inner"}  >
                                    {orgData && orgData.map(org => <SearchItem
                                        key={org.id} {...org} />)}
                                </div>
                            </PerfectScrollbar>
                        </div>

                    </div>
                    <div className='map'>
                        <OrgProfile />
                    </div>
                </div>
            </div>
        </motion.div>
    )

}


function SearchItem(props) {
    const setAddress = useSetRecoilState(searchSetAddressAtom)

    return (
        <div className='search-item dashboard-card'>
            <div className='left'>
                <div className='profile-pic'>

                </div>
                <div className='details'>
                    <div className='name'>
                        {props.name}
                    </div>
                    <div className='location'>
                        {props.address}
                    </div>
                    <div className='time'>
                        {props.officerName}
                    </div>
                    <div className='phonenumber'>
                        {props.webURL}
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='locate-btn'
                    onClick={e => {
                        setAddress(props.address)
                        console.log(123)
                    }}
                >
                    locate event on map
                </div>
            </div>
        </div>
    )

}