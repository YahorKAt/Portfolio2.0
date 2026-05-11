const base = import.meta.env.BASE_URL

export const fonts = `
  @font-face {
        font-family: 'DM Sans';
        src: url('${base}fonts/dm-sans-v17-latin-regular.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('${base}fonts/dm-sans-v17-latin-500.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('${base}fonts/dm-sans-v17-latin-600.woff2') format('woff2');
        font-weight: 600;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('${base}fonts/dm-sans-v17-latin-700.woff2') format('woff2');
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('${base}fonts/dm-sans-v17-latin-800.woff2') format('woff2');
        font-weight: 800;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('${base}fonts/poppins-v24-latin-regular.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('${base}fonts/poppins-v24-latin-500.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('${base}fonts/poppins-v24-latin-600.woff2') format('woff2');
        font-weight: 600;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('${base}fonts/poppins-v24-latin-900.woff2') format('woff2');
        font-weight: 900;
        font-display: swap;
    }
`