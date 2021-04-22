import { Box, Button, Container, makeStyles, Slide, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Item from './common/Item.js'
import Context from '../Context'
import { useHistory } from "react-router-dom"


export default function Address(){

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: 'center'
        },
        paper: {
            backgroundColor: 'transparent',
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
            width: 'auto'
        },
        heading: {
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
            marginBottom: 50
        }
    })

    const styles = useStyles()
    const history = useHistory()
    const goNext = () => history.push('/survey/2')

    return (
        <Context.Consumer>
            {store =>
                <Container className={styles.root}>
                    <Box>
                        <div>
                            <Typography variant="h3" className={styles.heading}>
                                We want to know your location
                            </Typography>
                            <div className={styles.paper}>
                                <Item title="What's your address ?">
                                    <TextField value={store.address}
                                                autoComplete='disabled'
                                                onChange={(e) => store.setAddress(e.target.value)}
                                                variant="filled"/>
                                </Item>
                            </div>
                            
                            <Slide direction='up' in={store.address}>
                                <Button onClick={() => {store.submitForm(); goNext()}} size="large" variant="contained" color="secondary">
                                    Continue
                                </Button>
                            </Slide> 
                        </div>
                    </Box>
                </Container>
            }
        </Context.Consumer>   
    )
}