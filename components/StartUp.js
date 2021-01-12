import { useContext } from 'react';
import OBSWebSocket from 'obs-websocket-js';
import { OBSContext } from '../contexts/OBSContext';
import Btn from './Btn';
import DeviceSelection from './DeviceSelection';
import SceneCollectionSelection from './SceneCollectionSelection';

const StartUp = () => {
  const OBS = useContext(OBSContext);

  const handleConnect = () => {
    const obsAdress = 'localhost:4444';
    const obsPassword = '';

    const obs = new OBSWebSocket();
    obs
      .connect({
        address: obsAdress,
        password: obsPassword
      })
      .then(() => {
        console.log(`Success! We're connected & authenticated.`);
        OBS.setObs(obs);
        return obs.send('GetSceneList');
      });
  };

  return (
    <div className='container'>
      <Btn onClick={handleConnect}>Connect</Btn>
      <DeviceSelection />
      <SceneCollectionSelection />
    </div>
  );
};

export default StartUp;
