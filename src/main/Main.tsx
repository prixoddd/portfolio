import React from 'react'
import s from './Main.module.sass'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'

const particlesOpt: any = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
}
// const defaultOptions = {
//     reverse: false, // reverse the tilt direction
//     max: 35, // max tilt rotation (degrees)
//     perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//     scale: 1, // 2 = 200%, 1.5 = 150%, etc..
//     speed: 1000, // Speed of the enter/exit transition
//     transition: true, // Set a transition on enter/exit.
//     axis: null, // What axis should be disabled. Can be X or Y.
//     reset: true, // If the tilt effect has to be reset on exit.
//     easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
// }

const Main = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container)
    }, [])

    return (
        <div id="main_block" className={s.mainBlock}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOpt}
                className={s.particles}
            />
            <div className={`${s.container}`}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>
                        I am <span className={s.nikita}>Nikita Derjugin</span>
                    </h1>
                    {/*<p>A Graphic Designer & Frontend Developer</p>*/}
                    <div className={s.typingText}>
                        <ReactTypingEffect text="A Frontend Developer" />
                    </div>
                </div>
                <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={35}
                    tiltMaxAngleY={35}
                    perspective={900}
                    scale={1.1}
                    transitionSpeed={2000}
                    gyroscope={true}
                >
                    <div className={s.photo}></div>
                </Tilt>
            </div>
        </div>
    )
}

export default Main
