import { Box, CardContent, makeStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { useState } from 'react'

export default function Item(props) {
    const colorPalette = [
        {
            bg: '#B400D1',
            shadow: '#550562'
        },
        {
            bg: '#D10069',
            shadow: '#860A49'
        },
        {
            bg: '#5B00D1',
            shadow: '#320271'
        }
    ]


    const [color] = useState(colorPalette[Math.floor(Math.random() * colorPalette.length)])

    const useStyles = makeStyles({
        root: {
            width: props.small ? 300 : 350,
            backgroundColor: color.bg,
            borderRadius: props.small ? 15 : 33,
            marginBottom: 10,
            boxShadow: `0px 3px 30px ${color.shadow}`
        },
        title: {
            fontWeight: 'bold',
            fontSize: props.small ? 18 : 20,
            color: 'white'
        }
    })

    const styles = useStyles()

    return (
    <Card className={styles.root}>
        <CardContent>
            <Typography className={styles.title}>{props.title}</Typography>
            <Box my={props.small ? 1 : 4}>
                { props.children }
            </Box>
        </CardContent>
    </Card>
    )
}