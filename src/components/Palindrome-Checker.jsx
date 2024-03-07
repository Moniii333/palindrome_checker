import { useState } from "react"

export default function PalindromeChecker() {
    const [check, setCheck] = useState('');
    const [results, setResults] = useState('');
    
    const checker = async() => {
        // To account for spaces we remove them completely and compare against og results(check)
            const adjustedStr = check.replace(/\s/g, '').toLowerCase()
            const reverse = check.replace(/\s/g, '').split('').reverse().join('');
            if(!check){
                setResults('Please input a value!');
            }else if(reverse === adjustedStr){
                setResults(`${check} is a palindrome`);
            }else{
                setResults(`${check} is not a palindrome`);
            }
            setCheck('');
    }

    return(
        <>
            <h1>Check your word below!</h1>
            <div>
                <label htmlFor="text-input">See if a word is a palindrome:  
                </label>
                <br></br><br></br>
                <input id="text-input" placeholder="cat = false or eye = true" value={check} onChange={(e) => setCheck(e.target.value)} autoComplete="off" />
                <br></br><br></br>
                <button id="check-btn" onClick={() => checker()}>Find Out!</button>
            </div>
            {results && (
                <div id="result">{results}</div>
            )}
            <div id='me'>
                <p><em>Created by: Monique</em></p>
                <a href="https://github.com/Moniii333/palindrome_checker">Check out my source code!</a>
            </div>
        </>
    )
}