import './Navbar.css'


function Navbar() {
    return (
        <>
            <div className="nav">
                <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
                <div className='btn'>
                    <select name="LanguageSelect" data-uia="language-picker-header">
                        <option selected="" lang="en" label="English" value="en-IN">
                            English
                        </option>
                        <option lang="hi" label="हिन्दी" value="hi-IN">
                            हिन्दी
                        </option>
                    </select>
                    <button className="btn1">Sign In</button>

                </div>
            </div>
        </>
    )
}
export default Navbar