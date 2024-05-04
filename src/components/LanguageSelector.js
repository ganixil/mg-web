import {useTranslation} from "react-i18next";
import "../styles/LanguageSelector.css";
function LanguageSelector()
{
    const [t, i18n] = useTranslation();

    const handleLangChange = (event)=>{
        i18n.changeLanguage(event.target.value);
    }
    return <div>
        <select onChange={handleLangChange} className="lang-select">
            <option disabled selected value="">{t('language-selector.label')}</option>
            <option value="en">{t('language-selector.languages.en')}</option>
            <option value="zh">{t('language-selector.languages.zh')}</option>
            <option value="es">{t('language-selector.languages.es')}</option>
        </select>     
    </div>
}

export default LanguageSelector;