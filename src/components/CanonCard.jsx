// eslint-disable-next-line react/prop-types
const CanonCard = ({ imgURL, changeBigCanonImage, bigCanonImg }) => {

    const handleClick = () => {
        // eslint-disable-next-line react/prop-types
        if (bigCanonImg !== imgURL.bigCanon) {
            // eslint-disable-next-line react/prop-types
            changeBigCanonImage(imgURL.bigCanon);
        }
    };

    return (
        <div
            // eslint-disable-next-line react/prop-types
            className={`rounded-lg ${bigCanonImg === imgURL.bigCanon
                ? "border-pale-red border-2"
                : "border-white/50 border opacity-70"
                } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-30 sm:h-30 rounded-lg p-1'>
                <img
                    // eslint-disable-next-line react/prop-types
                    src={imgURL.thumbnail}
                    alt='canon collection'
                    width={127}
                    height={103.34}
                    className='object-contain rounded-sm'
                />
            </div>
        </div>
    );
};

export default CanonCard;