import { useState } from 'react'
import { searchOrgbyName } from '../../utils/firebaseFunctions'

export default function UserSearch(){
    const [searchField, setSearchField] = useState()
    function search(){
        result = searchOrgbyName(searchField)
    }

    return(
        <>
            <input type = "text" onChange = {e => setSearchField(e.target.value)}/>
            <button onClick = {search}>Search</button>
        </>
    )
}