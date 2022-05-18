import { createTheme } from '@mui/material/styles';


// search field style
export const inputStyle = {
    outline: 'none',
    border: '0px',
    borderLeft: '2px solid var(--color-gray)',
    padding: '0 8px',
    marginLeft: '4px',
    fontSize: '16px'
}

// search container
export const searchContainer = {
    border: '2px solid var(--color-search-border)',
    padding: '5px 20px',
    borderRadius: '4px'
}

export const iconStyle = {
    fontSize: '30px',
    color: 'var(--color-gray)'
}

// badge style
export const theme = createTheme({
    palette: {
        neutral: {
            main: 'var(--color-primary)',
            contrastText: 'var(--color-white)',
        },
    },
});