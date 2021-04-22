import { Box, Button, Container, makeStyles, Slide, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Item from './common/Item.js'
import Context from '../Context'
import { useHistory } from "react-router-dom"


export default function Review(){
    const [steps, setSteps] = useState({
        current: 1,
        personal: {
            name: true,
            email: false,
            job: false
        }
    })

    const [address, setAddress] = useState('')

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
    function submitSurvey(){
        history.push('/survey/completed')
    }

    return (
        <Context.Consumer>
            {store => 
                <Container className={styles.root}>
                <Box>
                {steps && <div>
                    <Typography variant="h3" className={styles.heading}>
                        Review us
                    </Typography>
                    <div className={styles.paper}>
                        <Item title="Leave a comment">
                            <TextField value={store.review}
                                        multiline
                                        rows={4}
                                        autoComplete='disabled'
                                        onChange={(e) => store.setReview(e.target.value)}
                                        variant="filled"/>
                        </Item>
                    </div>
                    <Slide direction='up' in={store.review}>
                        <Button onClick={submitSurvey} size="large" variant="contained" color="secondary">
                            Finish
                        </Button>
                    </Slide> 
                </div>}
            </Box>
            </Container>
        }
        </Context.Consumer>
    )
}