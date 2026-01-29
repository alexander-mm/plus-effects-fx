import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import CanonInstallVideoONE from '../components/CanonInstallVideoONE';
import BoxElemsAssemblyVideoONE from '../components/BoxElemsAssemblyVideoONE';

const UserManualONE = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <section id='' className='bg-black pt-32  flex flex-col'>
            <div>
                <h1 className='font-century font-bold text-3xl text-white text-center'>{t('user-guide')}</h1>
            </div>
            <div className='flex justify-center flex-wrap'>
                <CanonInstallVideoONE />
                <BoxElemsAssemblyVideoONE />
            </div>
        </section >
    )
}

export default UserManualONE;