
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    menuLink: {
        margin: '1rem 1rem'
    }

});

export default styles;
