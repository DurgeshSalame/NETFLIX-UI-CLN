import './Container2.css'

function Container2() {
    return(
        <>
        <div className="container2">
            <div className='heading2'>
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='cont2-img' >
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''></img>
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" controls autoPlay loop muted></video>

            </div>
        </div>
        </>
    )
}
export default Container2