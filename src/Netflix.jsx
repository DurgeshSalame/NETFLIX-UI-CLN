import Button1, { Button2 } from './But_1'
import Container2 from './Container2'
import Container3 from './Container3'
import Container4 from './Container4'
import Container5 from './Container5'
import Footer from './Footer'
import { Main_1} from './Heading'
import Navbar from './Navbar'
import './Netflix.css'
import Container6 from './Container6'

function Netflix() {
    return (
        <>
            <div className="container1">
                <div className="box1"></div>
                <Navbar />
                <Main_1 />
                <Button1 />
            </div>
            <div className='line_end'></div>
            <Container2 />

            <div className='line_end'></div>
            <Container3 />
            
            <div className='line_end'></div>
            <Container4 />
            
            <div className='line_end'></div>
            <Container5 />
            
            <div className='line_end'></div>
            <Container6 />
            
                <Button2 />
            <div className='line_end'></div>
            <section className="container7">
                <div>
                <Footer />
                
                
                </div>
            </section>
            {/* <div className='line_end'></div> */}


        </>
    )
}
export default Netflix