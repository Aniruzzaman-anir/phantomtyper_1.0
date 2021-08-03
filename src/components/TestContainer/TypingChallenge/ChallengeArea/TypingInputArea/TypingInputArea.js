import React from 'react';



const TypingInputArea = ({wordMatchHandler,typingWord,onKeyPressWordMatch}) => {
    return (
        <div className="flex justify-center mt-12">
            <input value={typingWord} onKeyPress={(e)=>onKeyPressWordMatch(e)} onChange={wordMatchHandler} className="w-3/4 h-12 outline-none p-4 text-center text-4xl"/>
            
        </div>
    )
}

export default TypingInputArea;