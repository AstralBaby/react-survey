import { makeStyles, Typography } from "@material-ui/core"

export default function Completed() {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#0D6A57',
            marginBottom: 20,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        heading: {
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
            marginBottom: 50
        }
    })

    const styles = useStyles()

    return (
        <div className={styles.root}>
            <Typography variant="h3" className={styles.heading}>
                Thank you for taking the survey!
            </Typography>
        </div>
    )
}