import React from 'react'
import {Container, CssBaseline} from '@material-ui/core'
import AdminAppbar from '../components/AdminAppBar'
import Family from '../components/FamilyDetails'

function FamilyPage() {
    return (
        <div>
            <AdminAppbar />
            <CssBaseline />
            <Container maxWidth="md" style={{marginTop: '30px'}}>
                <Family />
            </Container>
        </div>
    )
}

export default FamilyPage
