const CanonCard = ({ imgURL, changeBigCanonImage, bigCanonImg }) => {
    const handleClick = () => {
        if (bigCanonImg !== imgURL.bigCanon) {
            changeBigCanonImage(imgURL.bigCanon);
        }
    };

    return (
        <div
            className={`rounded-lg ${bigCanonImg === imgURL.bigCanon
                ? "border-pale-red border-2"
                : "border-white/50 border opacity-30"
                } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4'>
                <img
                    src={imgURL.thumbnail}
                    alt='canon collection'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default CanonCard;