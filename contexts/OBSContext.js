import {createContext, useState, useEffect} from "react";
import OBSWebSocket from 'obs-websocket-js';

const defaultValue = {
  obs: null,
  setObs: () => null,
  obsMethods: {
    getScenesList: () => null,
    getCurrentScene: () => null,
  }
}

export const OBSContext = createContext(defaultValue);

const OBSContextProvider = (props) => {
  const [obs, setObs] = useState(defaultValue.obs)
  useEffect(() => {
    handleConnect()
  }, [])

  const getScenesList = async () => {
    return await obs.send('GetSceneList')
  }

  const getCurrentScene = async () => {
    return await obs.send("GetCurrentScene");
  }

  const handleConnect = () => {
    const obsAdress = "localhost:4444";
    const obsPassword = "";

    const obs = new OBSWebSocket()
    obs
      .connect({
        address: obsAdress,
        password: obsPassword,
      })
      .then(() => {
        console.log(`Success! We're connected & authenticated.`);
        return obs.send("GetSceneList");
      })

    setObs(obs)
  }

  return (
    <OBSContext.Provider value={{
      obs,
      setObs,
      obsMethods: {
        getScenesList,
        getCurrentScene
      }
    }}>
      {props.children}
    </OBSContext.Provider>
  );
};

export default OBSContextProvider
