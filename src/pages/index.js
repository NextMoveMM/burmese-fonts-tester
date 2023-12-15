import DeliveryModal from '@/components/DeliveryModal';
import NextMoveLogo from '@/components/NextMoveLogo';
import DarkModeToggle from '@/components/DarkModeToggle';
import getAllFonts from '@/helper/getAllFonts';
import { useEffect, useState } from "react";

const Home = ({fonts}) => {
	
	const [selectedFont, setSelectedFont] = useState(fonts.unicodes[0]);
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isLineThrough, setIsLineThrough] = useState(false);
	const [fontSize, setFontSize] = useState(18);
	const [showModal, setShowModal] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const defaultText = `သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။`;
	
	useEffect(() => {
		const metaTag = document.querySelector('meta[name="theme-color"]');
        const backgroundColor = isDarkMode ? '#3f3f46' : 'white'; //bg-zinc-700 color code

        if (metaTag) {
            metaTag.setAttribute('content', backgroundColor);
        } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.name = 'theme-color';
            newMetaTag.content = backgroundColor;
            document.head.appendChild(newMetaTag);
        }
	}, [isDarkMode]); 
	  
    return (
		<div className={`flex flex-col h-screen w-screen ${isDarkMode ? 'dark' : ''}`}>
			<div className="flex flex-col flex-1 dark:bg-zinc-700 overflow-hidden">

				{/* header */}
				<div className="flex flex-row justify-between items-center h-12 border-b border-b-gray-200 dark:border-b-gray-800">
					<div className="sm:flex-1"></div>
					<div className="flex-1 flex sm:justify-center">
						<h1 className="font-serif ml-5 font-bold italic text-lg dark:text-white">
							Burmese Fonts Tester
						</h1>
					</div>
					<div className="flex sm:flex-1 justify-center">
						<div className="mr-5">
							<DarkModeToggle
								value={isDarkMode}
								onChange={() => setIsDarkMode( prev => !prev )}
							/>
						</div>
					</div>
				</div>

				{/* contents */}
				<div className="flex flex-row flex-1 w-full overflow-hidden">

					{/* fonts list for desktop */}
					<div className="flex-col w-1/4 border-r border-r-gray-200 dark:border-r-gray-800 hidden sm:flex">

						{/* title */}
						<div className="flex justify-center items-center h-8 border-b border-b-gray-200 dark:border-b-gray-800 shadow dark:shadow-zinc-800">
							<span className="font-bold text-xs dark:text-white">Fonts</span>
						</div>

						{/* desktop font list scroll */}
						<div className="flex-1 overflow-auto dark:bg-zinc-800">
							<div className="flex flex-col">
								{ (fonts.unicodes.length !== 0) && (
									<div className="flex flex-col">
										<div className="flex items-center justify-center bg-gray-200 dark:bg-zinc-700 sticky top-0 h-8">
											<span className="text-xs font-thin dark:text-white">Unicodes</span>
										</div>
										<div className="space-y-2 px-3 py-2">
											{ fonts.unicodes.map( (font, index) => 
												<div 
													key={index} 
													className={`flex items-center justify-center h-14 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-100' : ''}`}
													onClick={ () => setSelectedFont(font) }
												>
													<span className={`text-sm font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500 dark:text-white'}`}>
														{font.displayName}
													</span>
												</div>
											)}
										</div>
									</div>
								)}
								{ (fonts.nonUnicodes.length !== 0) && (
									<div className="flex flex-col">
										<div className="flex items-center justify-center bg-gray-200 dark:bg-zinc-700 sticky top-0 h-8">
											<span className="text-xs font-thin dark:text-white">Non-Unicodes</span>
										</div>
										<div className="space-y-2 px-3 py-2">
											{ fonts.nonUnicodes.map( (font, index) => 
												<div 
													key={index} 
													className={`flex items-center justify-center h-14 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-100' : ''}`}
													onClick={ () => setSelectedFont(font) }
												>
													<span className={`text-sm font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500 dark:text-white'}`}>
														{font.displayName}
													</span>
												</div>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* preview */}
					<div className="flex flex-col flex-1 overflow-hidden">
						
						<div>
							<div className="flex justify-center items-center h-8 border-b border-b-gray-200 dark:border-b-gray-800 shadow dark:shadow-zinc-800">
								<span className="font-bold text-xs dark:text-white">Preview</span>
							</div>
						</div>

						{/* tools */}
						<div>
							<div className="flex flex-row space-x-2 justify-end m-3">

								<div className="flex flex-row rounded border border-gray-300 dark:border-gray-500">
									<button 
										className={`flex items-center justify-center h-8 w-8 rounded-l ${ isBold && 'bg-gray-500 dark:bg-gray-400'}`}
										onClick={() => setIsBold( prev => !prev )}
									>
										<span className={`font-serif ${ isBold ? 'text-white' : 'text-black dark:text-white' }`}>B</span>
									</button>
									<button 
										className={`flex items-center justify-center h-8 w-8 border-x border-x-gray-300 dark:border-x-gray-500 ${ isItalic && 'bg-gray-500 dark:bg-gray-400'}`}
										onClick={() => setIsItalic( prev => !prev )}
									>
										<span className={`font-serif ${ isItalic ? 'text-white' : 'text-black dark:text-white' }`}>I</span>
									</button>
									<button 
										className={`flex items-center justify-center h-8 w-8 rounded-r ${ isLineThrough && 'bg-gray-500 dark:bg-gray-400'}`}
										onClick={() => setIsLineThrough( prev => !prev )}
									>
										<span className={`font-serif line-through ${ isLineThrough ? 'text-white' : 'text-black dark:text-white' }`}>W</span>
									</button>
								</div>

								<div className="flex flex-row rounded border border-gray-300 dark:border-gray-500 px-1">
									<div className="flex items-center justify-center h-8 w-36 rounded-r">
										<input
											type="range"
											min="10"
											max="200"
											step="1"
											value={fontSize}
											onChange={ input => setFontSize(Number(input.currentTarget.value)) }
										/>
									</div>
									<div className="flex items-center justify-center w-8 h-8">
										<span className="text-xs dark:text-white">{fontSize}px</span>
									</div>
								</div>

								<div className="flex flex-row rounded border border-gray-300 dark:border-gray-500">
									<button 
										className="flex items-center justify-center h-8 w-8 rounded active:bg-gray-300"
										onClick={ () => setShowModal(true)}
									>
										<span className="dark:text-white">&#x2193;</span>
									</button>
								</div>

							</div>
						</div>

						{/* mobile font list scroll */}
						<div>
							<div className="flex overflow-x-auto sm:hidden bg-gray-200 dark:bg-zinc-800">
								{ (fonts.unicodes.length !== 0) && (
									<div className="flex flex-row">
										<div className="flex items-center bg-white rounded-lg mx-1 my-2 sticky left-0 dark:bg-zinc-700 shadow">
											<span className="font-thin text-center text-xs mx-2 dark:text-white">
												Unicodes
											</span>
										</div>
										{ fonts.unicodes.map( (font, index) => 
											<div 
												key={index} 
												className={`flex items-center justify-center w-24 mx-1 my-2 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-200' : ''}`}
												onClick={ () => setSelectedFont(font) }
											>
												<span className={`text-xs m-1 font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500 dark:text-white'}`}>
													{font.displayName}
												</span>
											</div>
										)}
									</div>
								)}
								{ (fonts.nonUnicodes.length !== 0) && (
									<div className="flex flex-row">
										<div className="flex items-center bg-white rounded-lg mx-1 my-2 sticky left-0 dark:bg-zinc-700 shadow">
											<span className="font-thin text-center text-xs mx-1 dark:text-white">
												Non
												Unicodes
											</span>
										</div>

										{ fonts.nonUnicodes.map( (font, index) => 
											<div 
												key={index} 
												className={`flex items-center justify-center w-24 mx-1 my-2 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-200' : ''}`}
												onClick={ () => setSelectedFont(font) }
											>
												<span className={`text-xs m-1 font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500 dark:text-white'}`}>
													{font.displayName}
												</span>
											</div>
										)}
									</div>
								)}
							</div>
						</div>

						<div className="flex-1">
							<div className="flex flex-col h-full">
								{/* Warning */}
								{ selectedFont.unicode && (
									<div className="flex items-center justify-center h-8">
										<span className="text-xs text-yellow-500">
											Warning! Rewrite with English Keyboard to see changes for non-unicode fonts
										</span>
									</div>
								)}
								<textarea
									className="flex-1 focus:outline-none placeholder:font-sans text-black w-full h-full resize-none p-8 dark:bg-zinc-700 dark:text-white"
									style={{
										fontFamily: selectedFont.fileName,
										fontSize: fontSize,
										fontWeight: isBold ? 700 : 400,
										fontStyle: isItalic ? 'italic' : '',
										textDecorationLine: isLineThrough ? 'line-through' : ''
									}}
									defaultValue={defaultText}
									placeholder="Type something..."
								/>
							</div>
						</div>

					</div>
				</div>

				{/* footer */}
				<div className="flex items-center justify-end border-t border-t-gray-200 dark:border-t-zinc-800 h-8">
					<a 
						href="https://thenextmove.net"
						className="flex flex-row items-center space-x-2 mr-4"
					>
						<span className="text-2xs italic text-gray-400">Brought To You By</span>
						<NextMoveLogo theme={ isDarkMode ? 'light' : 'dark' }/>
					</a>
				</div>
			</div>
			
			<DeliveryModal
				show={showModal}
				onClose={ () => setShowModal(false)}
				selectedFont={selectedFont}
			/>
		</div>
    );
}

export async function getStaticProps() {

	const snakeCaseToReadableCase = (str) => {
		return str.replace(/_([a-z])/g, function(match, letter) {
			return letter.toUpperCase();
		}).replace(/^([a-z])/, function(match, letter) {
			return letter.toUpperCase();
		}).replace(/([a-z])([A-Z])/g, function(match, first, second) {
			return first + ' ' + second;
		});
	}

	const allFonts = getAllFonts();

	const mixedFonts = allFonts.map( font => {
		return {
			displayName: snakeCaseToReadableCase(font.fileName),
			...font
		}
	});

	const fonts = {
		unicodes: mixedFonts.filter( e => e.unicode ),
		nonUnicodes: mixedFonts.filter( e => !e.unicode )
	}

	return {
		props: {
			fonts
		},
	};
}

export default Home;