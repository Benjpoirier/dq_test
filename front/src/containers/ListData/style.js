import { grey } from '@material-ui/core/colors';

export default () => ({
    root: {
        width: '100%',
        '& > li': {
            backgroundColor: 'white',
        },
        '& > li:nth-child(2n)': {
            backgroundColor: grey[100],
        },
    },
});
