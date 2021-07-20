
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { useState, useEffect} from 'react';

const messages = {
  'fr-FR': {
    title: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
    description: "Vous avez {m_num} nouveaux messages"},
    'en-EN': {
    title: "Today is {ts, date, ::yyyyMMdd}",
    description: "You've got {m_num} new messages"},
    'tr-TR': {
      title: "Bugun {ts, date, ::yyyyMMdd}",
      description: "{m_num} yeni mesajiniz var"
    },
};

function App() {

  const isLocale = localStorage.getItem("locale")

  // bilgisayar diline bagli olarak dil ayarlanmasi
  const defaultLocale =  isLocale ? isLocale: navigator.language;

  const [locale, setlocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)

  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage
        id="title"
        defaultMessage="Today is {ts, date, ::yyyyMMdd}"
        values={{ts:Date.now()}}
        ></FormattedMessage>

        <p>
          <FormattedMessage id="description"  
          defaultMessage="You've got {m_num} new messages"
          values ={{m_num: 3}}/>
        </p>

        <br /><br />
        <button onClick={() => setlocale("tr-TR")}>TR</button>
        <br /><br />
        <button onClick={() => setlocale("en-EN")}>EN</button>
        <br /><br />
        <button onClick={() => setlocale("fr-FR")}>FR</button>
        
      </IntlProvider>
    </div>
  );
}

export default App;
