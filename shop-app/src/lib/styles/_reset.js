import { css } from 'lit';

export const resetStyles = css`
    html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *,
    *:before,
    *:after {
        font-family: inherit;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    /**
    * root level
    */
    html,
    body {
        height: 100%;
    }
    :root {
        --bg: hsl(0, 0%, 98%);
        --bg-offset: hsl(0, 0%, 100%);
        --text: hsl(200, 15%, 8%);
        --gray: hsl(0, 0%, 52%);
        --txtbox: hsl(0, 0%, 33%);
        --border: rgba(0, 0, 0, 0.1);
    }

    /**
    * Reset some basic elements
    */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    hr,
    dl,
    dd,
    ol,
    ul,
    figure {
        margin: 0;
        padding: 0;
    }

    /**
    * Shared declarations for certain elements.
    */
    input,
    textarea,
    button {
        font-family: inherit;
    }

    textarea {
        resize: none;
    }

    /**
    * Page-level styling (e.g. HTML and BODY elements).
    */

    body {
        font-size: 14px;
        background-color: var(--bg);
        color: var(--text);
    }

    :focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
    }

    /**
    * Simple default styles for headings 1 through 6.
    */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    h1 {
        font-size: 22px;
    }

    /**
    * Basic styling for paragraphs.
    */
    p {
        line-height: 1.4;
        max-width: 50em;
        margin-bottom: 1.5em;
        font-size: var(--font-size);
    }
    p.margin-btm-reset {
        margin-bottom: 0px;
    }

    /**
    * Default styles for simple hyperlinks.
    */
    a {
        text-decoration: none;
        color: var(--color-primary);
    }

    button {
        background: transparent;
        cursor: pointer;
        border: 0;
    }

    /**
    * Remove trailing margins from nested lists.
    */
    li > ul,
    li > ol {
        margin-bottom: 0;
    }
`;