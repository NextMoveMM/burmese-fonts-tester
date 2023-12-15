export default (fontFiles) => {

    const fontFaces = fontFiles.map( fontFile => {
        return `
            @font-face {
                font-family: '${fontFile.fileName}';
                src: url('${process.env.NEXT_PUBLIC_APP_URL}/api/fonts/${fontFile.fileName}.${fontFile.extension}') format('truetype'),
            }
        `
    }).join('\n');

    const cssFile = `
        /* Auto-generated font-faces */
        /* Brought to you by NextMove.inc */
        ${fontFaces}
    `;
    
    return cssFile;
}