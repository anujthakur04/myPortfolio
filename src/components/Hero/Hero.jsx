import React from 'react';
import anuj from '../../assets/anujT.jpg';
import { ScrollContainer, Sticky, ScrollPage, Animator, batch, MoveIn, MoveOut, Fade, FadeIn, StickyIn, ZoomIn } from 'react-scroll-motion';

function Hero() {
    const imageAnimation = batch(Fade(), MoveIn(1000, 0), MoveOut(0, 0)); // Image moves right
    const textAnimation = batch(Fade(), MoveIn(-1000, 0), MoveOut(0, 0)); // Text moves left
    const zoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn())

    return (
        <ScrollContainer>
            {/* First Page */}
            <ScrollPage page={0}>
                <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                    {/* Text Centered */}
                    <div className="text-center">
                        <Animator animation={batch(Sticky(), FadeIn(), MoveOut(0, 500))}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Hello, Stalker!
                            </h1>
                        </Animator>
                    </div>
                </div>
            </ScrollPage>

            {/* Second Page */}
            <ScrollPage page={1}>
                <div className="w-full h-screen bg-gray-900 flex items-center justify-between px-12">
                    {/* Text (moves left) */}
                    <Animator animation={textAnimation}>
                        <div className="w-1/2 text-left">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting.
                            </h1>
                        </div>
                    </Animator>

                    {/* Image (moves right) */}
                    <Animator animation={imageAnimation}>
                        <div
                            className="flex items-center justify-center"
                            style={{ width: '400px', height: '400px' }}
                        >
                            <img
                                src={anuj}
                                alt="Photo"
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </Animator>
                </div>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={zoomInScroll}>
                    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                        <div className='text-center'>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Education
                            </h1>
                        </div>

                    </div>

                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
}

export default Hero;
