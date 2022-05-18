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
    color: 'var(--color-gray)',
    marginLeft: '10px'
}

export const searchIcon = {
    color: 'var(--color-gray)',
    fontSize: '26px'
}

// badges text

export const badgetext = {
    color: 'var(--color-gray)',
    marginLeft: '5px',
    
}

// badge style using custom theme
export const theme = createTheme({
    palette: {
        neutral: {
            main: 'var(--color-primary)',
            contrastText: 'var(--color-white)',
        },
    },
});