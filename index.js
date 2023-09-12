import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {useState} from 'react';

const RNApp = () => {
  const [urlState, setUrlState] = useState('');

  const handleDeepLink = url => {
    if (url) {
      console.log({url});
      setUrlState(url);

      return url;
    }
  };

  Linking.getInitialURL().then(handleDeepLink).catch(console.error);
  Linking.addEventListener('url', event => handleDeepLink(event.url));

  return <App url={urlState} />;
};

AppRegistry.registerComponent(appName, () => RNApp);
