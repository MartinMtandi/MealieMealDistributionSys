import React from 'react'
import {Container, CssBaseline} from '@material-ui/core'
import NewHousehold from '../components/CreateHousehold'
import AdminAppbar from '../components/AdminAppBar'

function CreateHouseholdPage() {
    return (
        <div>
             <AdminAppbar />
            <CssBaseline />
            <Container maxWidth="md" style={{marginTop: '30px'}}>
                <NewHousehold />
            </Container>
        </div>
    )
}

export default CreateHouseholdPage
