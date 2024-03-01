import './But_1.css'

function Button1() {
    return (
        <>
            <div className='i_b'>
                <input type="email" className='inp_button' placeholder="Email Address " />
                <button className='inp_but'>Get Started </button>
            </div>
        </>
    )
}
export default Button1
export function Button2() {
    return (
        <>
            <div className='i_b_1'>
                <input type="email" className='inp_button_1' placeholder="Email Address " />
                <button className='inp_but_1'>Get Started </button>
            </div>
        </>
    )
}

export function Button3() {
    return(
        <div className="box_but_1">
        <select name="LanguageSelect" data-uia="language-picker-header">
            <option selected="" lang="en" label="English" value="en-IN">
                English
            </option>
            <option lang="hi" label="हिन्दी" value="hi-IN">
                हिन्दी
            </option>
        </select>
    </div>

    )
}