// eslint-disable-next-line react/prop-types
const ContainerCard = ({ imgURL, changeBigImage, bigImg, shouldRender }) => {
    const handleClick = () => {
        if (shouldRender(imgURL)) {
            // eslint-disable-next-line react/prop-types
            changeBigImage(imgURL.bigImg);
        }
    };

    return (
        shouldRender(imgURL) && (
            <div
                // eslint-disable-next-line react/prop-types
                className={`rounded-lg ${bigImg === imgURL.bigImg
                    ? "border-pale-red border-2"
                    : "border-white/50 border opacity-30"
                    } cursor-pointer max-sm:flex-1`}
                onClick={handleClick}
            >
                <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4'>
                    <img
                        // eslint-disable-next-line react/prop-types
                        src={imgURL.thumbnail}
                        alt='canon collection'
                        width={115}
                        height={95}
                        className='object-contain'
                    />
                </div>
            </div >
        )
    );
};

export default ContainerCard;
