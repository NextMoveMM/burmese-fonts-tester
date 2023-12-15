import React from 'react'

const CDNLink = ({ link }) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <div className="flex flex-row dark:bg-zinc-600 rounded-lg overflow-hidden">
            <input 
                className="flex-1 flex items-center bg-sky-100 text-xs h-10 pl-2 pr-1 focus:outline-none"
                defaultValue={link}
            />
            <button 
                className="flex items-center justify-center w-12 text-gray-700 bg-sky-300 active:bg-sky-400"
                onClick={copyToClipboard}
            >
                <span className="text-xs">
                    Copy
                </span>
            </button>
        </div>
    )
}

const DeliveryModal = ({ 
    show, 
    onClose, 
    selectedFont 
}) => {

    const apiUrl = process.env.NEXT_PUBLIC_APP_URL;

    console.log(apiUrl);

    const cssSelectedLink = `@import url(${process.env.NEXT_PUBLIC_APP_URL}/api/${selectedFont.fileName}.css);`;
    const cssAllLink = `@import url(${process.env.NEXT_PUBLIC_APP_URL}/api/all.css);`;
    const htmlSelectedLink = `<link rel="stylesheet" href="${process.env.NEXT_PUBLIC_APP_URL}/api/${selectedFont.fileName}.css"></link>`;
    const htmlAllLink = `<link rel="stylesheet" href="${process.env.NEXT_PUBLIC_APP_URL}/api/all.css"></link>`;
    const downloadLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/fonts/${selectedFont.fileName}.${selectedFont.extension}`;

    return (
        <div 
            className="flex flex-col justify-center items-center fixed h-screen w-screen bg-opacity-50 top-0 transition-all duration-200"
            style={{
                top: show ? '0' : '120%',
            }}
        >
            {/* card */}
            <div className={`flex flex-col w-96 rounded-lg border border-gray-500 bg-white p-4 shadow-xl transition-all duration-300 dark:bg-zinc-600 ${ show ? 'rotate-0 opacity-1' : '-rotate-90 opacity-0' }`}>

                <div className="flex flex-row items-center justify-end">
                    <button 
                        className="border border-gray-400 rounded w-8 h-8"
                        onClick={onClose}
                    >
                        <span className="dark:text-white">X</span>
                    </button>
                </div>

                <div className="flex justify-center mt-2">
                    <a 
                        className="flex items-center border border-gray-400 rounded shadow active:bg-gray-200 dark:text-white"
                        href={downloadLink}
                    >
                        <span className="text-xs px-2 py-1">Download Font</span>
                    </a>
                </div>

                <div className="border-b border-b-gray-400 my-4"/>

                <span className="text-gray-700 font-bold text-lg dark:text-white">CDNs</span>

                <div className="flex flex-col my-3 space-y-2">
                    <span className="text-xs dark:text-white">Import in your CSS file</span>
                    <div>
                        <span className="text-gray-500 dark:text-gray-300 text-xs mb-1">For selected font only</span>
                        <CDNLink link={cssSelectedLink}/>
                    </div>
                    <div>
                        <span className="text-gray-500 text-xs mb-1 dark:text-gray-300">For all fonts</span>
                        <CDNLink link={cssAllLink}/>
                    </div>
                    
                </div>

                <div className="flex flex-row items-center justify-between space-x-2">
                    <div className="flex-1 border-b border-b-gray-400"/>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 border-b border-b-gray-400"/>
                </div>

                <div className="flex flex-col mt-3 mb-2 space-y-2">
                    <span className="text-xs dark:text-white">Import in your HTML head</span>
                    <div>
                        <span className="text-gray-500 dark:text-gray-300 text-xs mb-1">For selected font only</span>
                        <CDNLink link={htmlSelectedLink}/>
                    </div>
                    <div>
                        <span className="text-gray-500 dark:text-gray-300 text-xs mb-1">For all fonts</span>
                        <CDNLink link={htmlAllLink}/>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default DeliveryModal;