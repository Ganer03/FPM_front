"use client";
import {ReactElement, useState} from 'react';
import styles from './DepartmentsSlider.module.scss';
import Image from "next/image";
import {ContainerLayout, SubtitleLayout} from "@/entities";
import {ImageDepartmentDto} from "@/widgets/Department/DepartmentsInterface";

export const DepartmentSlider = ({ image }: { image: ImageDepartmentDto[] }): ReactElement =>  {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : image.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < image.length - 1 ? prevIndex + 1 : 0));
    };
    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    const trackStyle = {
        transform: `translateX(-${currentIndex * 100}%)`, // Смещение влево на ширину одного элемента
    };

    return (
        <>
    <SubtitleLayout text={"Фотогалерея"}>
        <ContainerLayout>
            <div className={"relative w-full m-auto overflow-hidden"}>
                <div className={styles.sliderTrack} style={trackStyle}>
                    {image.map((imageUrl, index) => (
                        <div className={"sm:h-[40vh] md:h-[70vh] flex-grow-0 flex-shrink-0 flex-[100%] box-border overflow-hidden rounded-xl md:rounded-md"} key={index}>
                            <Image src={imageUrl.image} alt={`Slide ${index + 1}`} className={"w-full h-full object-cover"} unoptimized={true} width={1200} height={900}/>
                        </div>
                    ))}
                </div>
                <div className={"flex mt-2"}>
                    {image.map((imageUrl, index) => (
                        <div className={"w-14 md:w-24 h-12 md:h-20"}>
                            <Image
                                width={100}
                                height={100}
                                unoptimized={true}
                                key={index}
                                src={imageUrl.image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-full h-full rounded-md object-cover mr-5 cursor-pointer border-2 opacity-60 border-s-transparent border-white ${currentIndex === index ? styles.activeSlide : ''}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={handlePrev} className={styles.prevButton}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <button onClick={handleNext} className={styles.nextButton}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </ContainerLayout>
    </SubtitleLayout>
    </>
    );
};

export default DepartmentSlider;
