import React, {useState, useEffect} from 'react'
import anime from 'animejs'

function ScrollTop() {   

    // State
    let [isVisible, setVisible] = useState(false) 

    // Style
    let buttonStyle = {        
        position: 'fixed',
        bottom: '40px',
        right: '40px',        
        borderRadius: '50px',
        textAlign: 'center',
        boxShadow: '2px 2px 3px #999',
    }

    ///Event handler
    let scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    let onScroll = () => {
        if(window.pageYOffset > 130){
            if(isVisible === false){
                setVisible(true)
                visibleAnimation(0).play() //nongol                
            }
        }else{
            if(isVisible === true){                
                setVisible(false)                
                visibleAnimation(100).play() //ilang
            }
        }
    } //if di scroll    

    // Animasi
    let visibleAnimation = (x) => anime({
        translateX: x,
        autoplay: 'false',
        targets: '#scrollBtn'
    })

    // componentDid

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);        
    })

    return (
        <div>
            <button onClick={scrollToTop} id="scrollBtn" className="btn btn-danger p-0 m-0" style={buttonStyle}>
                <i className="fa fa-arrow-up fa-2x" style={{margin: '12px'}} aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ScrollTop
