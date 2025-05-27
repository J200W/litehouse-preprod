'use client'
export default function PopupSlider({ imageList }) {
    return (
        <div id="pop-up-background">
            <button>
                <i aria-hidden="true" className="fa fa-times"></i>
            </button>
            <div className="pop-up swiper">
                <div className="swiper-wrapper">
                    {imageList.map((image, key) => {
                        return (
                            <div className="pop-up-item swiper-slide" key={key}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}