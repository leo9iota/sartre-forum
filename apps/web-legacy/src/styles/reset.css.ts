import { globalLayer, globalStyle } from '@vanilla-extract/css';

import { vars } from './vars.css'; // Ensure this points to your theme contract

/**
 * Create a 'reset' layer to ensure these styles have the lowest specificity.
 * This prevents the reset from accidentally overriding component styles.
 */
export const resetLayer = globalLayer('reset');

/**
 * 1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
 * 2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
 */
globalStyle('*, ::before, ::after', {
    '@layer': {
        [resetLayer]: {
            boxSizing: 'border-box',
            borderWidth: 0,
            borderStyle: 'solid',
            borderColor: 'currentColor'
        }
    }
});

/**
 * 1. Use a consistent sensible line-height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Use a more readable tab size.
 */
globalStyle('html', {
    '@layer': {
        [resetLayer]: {
            lineHeight: 1.5,
            WebkitTextSizeAdjust: '100%',
            MozTabSize: '4',
            tabSize: 4
        }
    }
});

/**
 * 1. Remove the margin in all browsers.
 * 2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
 */
globalStyle('body', {
    '@layer': {
        [resetLayer]: {
            margin: 0,
            lineHeight: 'inherit'
        }
    }
});

/**
 * 1. Add the correct height in Firefox.
 * 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
 * 3. Ensure horizontal rules are visible by default.
 */
globalStyle('hr', {
    '@layer': {
        [resetLayer]: {
            height: 0,
            color: 'inherit',
            borderTopWidth: '1px'
        }
    }
});

/**
 * Add the correct text decoration in Chrome, Edge, and Safari.
 */
globalStyle('abbr:where([title])', {
    '@layer': {
        [resetLayer]: {
            textDecoration: 'underline dotted'
        }
    }
});

/**
 * Remove the default font size and weight for headings.
 */
globalStyle('h1, h2, h3, h4, h5, h6', {
    '@layer': {
        [resetLayer]: {
            fontSize: 'inherit',
            fontWeight: 'inherit'
        }
    }
});

/**
 * Reset links to optimize for opt-in styling instead of opt-out.
 */
globalStyle('a', {
    '@layer': {
        [resetLayer]: {
            color: 'inherit',
            textDecoration: 'inherit'
        }
    }
});

/**
 * Add the correct font weight in Edge and Safari.
 */
globalStyle('b, strong', {
    '@layer': {
        [resetLayer]: {
            fontWeight: 'bolder'
        }
    }
});

/**
 * 1. Use the user's configured `mono` font family by default.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
globalStyle('code, kbd, samp, pre', {
    '@layer': {
        [resetLayer]: {
            fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: '1em'
        }
    }
});

/**
 * Add the correct font size in all browsers.
 */
globalStyle('small', {
    '@layer': {
        [resetLayer]: {
            fontSize: '80%'
        }
    }
});

/**
 * Prevent `sub` and `sup` elements from affecting the line height in all browsers.
 */
globalStyle('sub, sup', {
    '@layer': {
        [resetLayer]: {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline'
        }
    }
});

globalStyle('sub', {
    '@layer': {
        [resetLayer]: {
            bottom: '-0.25em'
        }
    }
});

globalStyle('sup', {
    '@layer': {
        [resetLayer]: {
            top: '-0.5em'
        }
    }
});

/**
 * 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
 * 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
 * 3. Remove gaps between table borders by default.
 */
globalStyle('table', {
    '@layer': {
        [resetLayer]: {
            textIndent: 0,
            borderColor: 'inherit',
            borderCollapse: 'collapse'
        }
    }
});

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
globalStyle('button, input, optgroup, select, textarea', {
    '@layer': {
        [resetLayer]: {
            fontFamily: 'inherit',
            fontSize: '100%',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            color: 'inherit',
            margin: 0,
            padding: 0
        }
    }
});

/**
 * Remove the inheritance of text transform in Edge and Firefox.
 */
globalStyle('button, select', {
    '@layer': {
        [resetLayer]: {
            textTransform: 'none'
        }
    }
});

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Remove default button styles.
 */
globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
    '@layer': {
        [resetLayer]: {
            WebkitAppearance: 'button',
            backgroundColor: 'transparent',
            backgroundImage: 'none'
        }
    }
});

/**
 * Remove the inner border and padding in Firefox.
 * This fixes the black circle/ring that appears on buttons and form controls in Firefox.
 */
globalStyle(
    'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner',
    {
        '@layer': {
            [resetLayer]: {
                borderStyle: 'none',
                padding: 0
            }
        }
    }
);

/**
 * Use the modern Firefox focus style for all focusable elements.
 */
globalStyle(':-moz-focusring', {
    '@layer': {
        [resetLayer]: {
            outline: 'auto'
        }
    }
});

/**
 * Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
 */
globalStyle(':-moz-ui-invalid', {
    '@layer': {
        [resetLayer]: {
            boxShadow: 'none'
        }
    }
});

/**
 * Add the correct vertical alignment in Chrome and Firefox.
 */
globalStyle('progress', {
    '@layer': {
        [resetLayer]: {
            verticalAlign: 'baseline'
        }
    }
});

/**
 * Correct the cursor style of increment and decrement buttons in Safari.
 */
globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
    '@layer': {
        [resetLayer]: {
            height: 'auto'
        }
    }
});

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
globalStyle('[type="search"]', {
    '@layer': {
        [resetLayer]: {
            WebkitAppearance: 'textfield',
            outlineOffset: '-2px'
        }
    }
});

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
globalStyle('::-webkit-search-decoration', {
    '@layer': {
        [resetLayer]: {
            WebkitAppearance: 'none'
        }
    }
});

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
globalStyle('::-webkit-file-upload-button', {
    '@layer': {
        [resetLayer]: {
            WebkitAppearance: 'button',
            font: 'inherit'
        }
    }
});

/**
 * Add the correct display in Chrome and Safari.
 */
globalStyle('summary', {
    '@layer': {
        [resetLayer]: {
            display: 'list-item'
        }
    }
});

/**
 * Removes the default spacing and border for appropriate elements.
 */
globalStyle('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
    '@layer': {
        [resetLayer]: {
            margin: 0
        }
    }
});

globalStyle('fieldset', {
    '@layer': {
        [resetLayer]: {
            margin: 0,
            padding: 0
        }
    }
});

globalStyle('legend', {
    '@layer': {
        [resetLayer]: {
            padding: 0
        }
    }
});

globalStyle('ol, ul, menu', {
    '@layer': {
        [resetLayer]: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        }
    }
});

/**
 * Prevent resizing textareas horizontally by default.
 */
globalStyle('textarea', {
    '@layer': {
        [resetLayer]: {
            resize: 'vertical'
        }
    }
});

/**
 * 1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
 * 2. Set the default placeholder color to the user's configured gray 400 color.
 */
globalStyle('input::placeholder, textarea::placeholder', {
    '@layer': {
        [resetLayer]: {
            opacity: 1,
            color: vars.colors.foregroundMuted
        }
    }
});

/**
 * Set the default cursor for buttons.
 */
globalStyle('button, [role="button"]', {
    '@layer': {
        [resetLayer]: {
            cursor: 'pointer'
        }
    }
});

/**
 * Make sure disabled buttons don't have the pointer cursor.
 */
globalStyle(':disabled', {
    '@layer': {
        [resetLayer]: {
            cursor: 'default'
        }
    }
});

/**
 * 1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
 * 2. Add `vertical-align: middle` to align img like icons.
 * 3. Make replaced elements have a max-width of 100% by default to prevent overflow.
 */
globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
    '@layer': {
        [resetLayer]: {
            display: 'block',
            verticalAlign: 'middle',
            maxWidth: '100%'
        }
    }
});

/**
 * Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
 */
globalStyle('img, video', {
    '@layer': {
        [resetLayer]: {
            maxWidth: '100%',
            height: 'auto'
        }
    }
});

/**
 * Ensure the default browser behavior of the `hidden` attribute.
 */
globalStyle('[hidden]', {
    '@layer': {
        [resetLayer]: {
            display: 'none'
        }
    }
});
