import { useTranslation } from 'react-i18next';
import '../css/floatingChat.css';
import '../css/chat.css';

const FloatingChat = () => {

    const { t } = useTranslation();

    return (
        <div className='flex flex-col chat bg-chat rounded-xl w-60'>
            <div className='bg-green-400 text-center font-century font-semibold rounded-t-xl py-1'>
                {t('write-us')}
            </div>
            <div className='bg-white shadow-xl mb-16 text-start text-sm md:text-md mt-2 ml-2 mr-5 pl-1 text-black font-microflf rounded-tl-lg rounded-tr-lg rounded-br-lg'>
                {t('client')}
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=593980429801"
                className="floating-chat z-[1000]"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div>
    );
};

export default FloatingChat;