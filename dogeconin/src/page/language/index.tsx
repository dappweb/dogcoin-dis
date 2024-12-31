import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Language() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('zh'); // 默认繁体中文
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLangSelect = (lang: string) => {
    setSelectedLang(lang);
  };

  const handleConfirm = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/"); // 2秒后返回首页
    }, 2000);
  };

  return (
    <div className="language-main-container">
      <div className="language-flex-row-db">
        <div className="language-group">
          <div className="language-dogecoin" />
          <span className="language-dogecoin-1">Dogecoin</span>
        </div>
        <div className="language-group-2">
          {/* <span className="language-tyq8-fmo3z">TYQ8***fmo3z</span> */}
          <span className="language-tyq8-fmo3z">1111111</span>
          <div className="language-rectangle" />
        </div>
        <div className="language-group-3" />
      </div>
      <div className="language-rectangle-4" />
      <div className="language-flex-row-be" onClick={() => handleLangSelect('zh')}>
        <div className="language-china" style={{ left: '-3px' }} />
        <span className="language-chinese-traditional">中文（繁體）</span>
        <div className={`language-check-box ${selectedLang === 'zh' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-e" onClick={() => handleLangSelect('en')}>
        <div className="language-english" style={{ left: '-14px' }} />
        <span className="language-english-6">English</span>
        <div className={`language-check-box ${selectedLang === 'en' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row" onClick={() => handleLangSelect('ja')}>
        <div className="language-japanese" style={{ left: '-14px' }}/>
        <span className="language-japanese-7">日本語</span>
        <div className={`language-check-box ${selectedLang === 'ja' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-9" onClick={() => handleLangSelect('ko')}>
        <div className="language-korean" style={{ left: '-14px' }}/>
        <span className="language-korean-a">한국어</span>
        <div className={`language-check-box ${selectedLang === 'ko' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-b" onClick={() => handleLangSelect('vi')}>
        <div className="language-vietnamese" style={{ left: '-14px' }}/>
        <span className="language-vietnamese-c">Tiếng Việt</span>
        <div className={`language-check-box ${selectedLang === 'vi' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-ca" onClick={() => handleLangSelect('th')}>
        <div className="language-thai" style={{ left: '-30px' }}/>
        <span className="language-thai-d" style={{ left: '-246px' }}>ไทย</span>
        <div className={`language-check-box ${selectedLang === 'th' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-dc" onClick={() => handleLangSelect('ms')}>
        <div className="language-malay-language" />
        <span className="language-melayu">Melayu</span>
        <div className={`language-check-box ${selectedLang === 'ms' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-d" onClick={() => handleLangSelect('es')}>
        <div className="language-malay-language-10" />
        <span className="language-spanish">español</span>
        <div className={`language-check-box ${selectedLang === 'es' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-d-12" onClick={() => handleLangSelect('fr')}>
        <div className="language-malay-language-13" />
        <span className="language-francais">Français</span>
        <div className={`language-check-box ${selectedLang === 'fr' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-ee" onClick={() => handleLangSelect('de')}>
        <div className="language-malay-language-15" />
        <span className="language-german">Deutsch</span>
        <div className={`language-check-box ${selectedLang === 'de' ? 'checked' : ''}`} />
      </div>
      <div className="language-flex-row-ef" onClick={() => handleLangSelect('ru')}>
        <div className="language-malay-language-17" />
        <span className="language-russian">Русский</span>
        <div className={`language-check-box ${selectedLang === 'ru' ? 'checked' : ''}`} />
      </div>
      <button className="language-group-19" onClick={handleConfirm}>
        <span className="language-confirm">Confirm</span>
        <div className="language-rectangle-backup" />
      </button>
      <div className="language-group-1a" />
      {showSuccess && (
        <div className="language-success-modal">
          <div className="language-success-content">
            切换语言成功
          </div>
        </div>
      )}
    </div>
  );
}
