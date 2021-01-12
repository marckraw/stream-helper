import { useEffect, useState } from 'react';

const defaultSceneCollection = [
  {
    name: 'mrck - streaming',
  },
  {
    name: 'virtual office',
  },
  {
    name: 'another custom collection',
  }
]


const SceneCollectionSelection = () => {
  const [sceneCollection, setSceneCollection] = useState(defaultSceneCollection)
  const [selectedSceneCollection, setSelectedSceneCollection] = useState('')

  const handleSelection = (event) => {
    console.log(event.target.value)
    setSelectedSceneCollection(event.target.value)
  }

  return (
    <div style={{marginTop: '100px'}}>
      <h2>Scene Collection Selection</h2>

      <div>
        <label htmlFor="sceneCollectionSelection">Choose output device:</label>

        <select name="devices" id="sceneCollectionSelection" onChange={handleSelection} value={selectedSceneCollection}>
          <option value="">--Please choose scene collection--</option>
          {
            sceneCollection.map(collection => {
              return (
                <option key={collection.name} value={collection.name}>{collection.name}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default SceneCollectionSelection
