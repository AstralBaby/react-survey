import { Box, Button, Container, makeStyles, Slide, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Item from './common/Item.js'
import Context from '../Context'
import { useHistory } from "react-router-dom"


export default function PersonalInformation(){
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
    const goNext = () => history.push('/survey/1')

    return (
        <Context.Consumer>
            {store =>
                {
                    const isReview = store.name && store.lastname && store.email
                    return (
                    <Container className={styles.root}>
                        <Box>
                            <div>
                                <Typography variant="h3" className={styles.heading}>
                                    Tell us about yourself
                                </Typography>
                                <Slide direction='up' in={true}>
                                    <div className={styles.paper}>
                                        <Item title="What's your name ?" small={isReview}>
                                            <TextField value={store.name}
                                                    label='Name'
                                                    autoComplete='disabled'
                                                    size={isReview ? 'small' : ''}
                                                    onChange={(e) => store.setName(e.target.value)}
                                                    variant="filled"/>
                                            <TextField value={store.lastname}
                                                        autoComplete='disabled'
                                                        label='Lastname'
                                                        onChange={(e) => store.setLastname(e.target.value)}
                                                        variant="filled"/>
                                        </Item>
                                    </div>
                                </Slide>
                                <Slide direction='up' in={store.name && store.lastname}>
                                    <div className={styles.paper}>
                                        <Item title="Your Email" small={isReview}>
                                            <TextField value={store.email}
                                                    autoComplete='disabled'
                                                    size={isReview ? 'small' : ''}
                                                    onChange={(e) => store.setEmail(e.target.value)}
                                                    variant="filled"/>
                                        </Item>
                                    </div>
                                </Slide>
                                <Slide direction='up' in={store.email}>
                                    <div className={styles.paper}>
                                        <Item title="What do you do for living?" small={isReview}>
                                            <TextField value={store.job}
                                                    autoComplete='disabled'
                                                    size={isReview ? 'small' : ''}
                                                    onChange={(e) => store.setJob(e.target.value)}
                                                    variant="filled"/>
                                        </Item>
                                    </div>
                                </Slide>
                                <Slide direction='up' in={isReview && store.job}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        onClick={goNext}
                                        color="secondary">
                                        Continue
                                    </Button>
                                </Slide> 
                            </div>
                        </Box>
                    </Container>
                    )
                }
            }
        </Context.Consumer>
    )
}