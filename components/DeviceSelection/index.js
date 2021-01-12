import { useEffect, useState } from 'react';

const DeviceSelection = () => {
  const [devices, setDevices] = useState([])
  const [inputDevices, setInputDevices] = useState([])
  const [selectedInputDevice, setSelectedInputDevice] = useState('')
  const [selectedOutputDevice, setSelectedOutputDevice] = useState('')


  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      // console.log("this are devices: ")
      // console.log(devices)
      const filteredOutputDevices = devices.filter(device => device.kind === "audiooutput")
      const filteredInputDevices = devices.filter(device => device.kind === "audioinput")

      console.log("filteredOutputDevices")
      console.log(filteredOutputDevices)

      setDevices(filteredOutputDevices)
      setInputDevices(filteredInputDevices)
    })
  }, [])

  const handleInputSelection = (event) => {
    console.log(event.target.value)
    setSelectedInputDevice(event.target.value)
  }

  const handleOutputSelection = (event) => {
    console.log(event.target.value)
    setSelectedOutputDevice(event.target.value)
  }

  return (
    <div>
      <h2>Device Selection</h2>

      <div>
        <label htmlFor="outputDeviceSelection">Choose output device:</label>

        <select name="devices" id="outputDeviceSelection" onChange={handleOutputSelection} value={selectedOutputDevice}>
          <option value="">--Please choose an option--</option>
          {
            devices.map(device => {
              return (
                <option key={`${device.deviceId} : ${device.groupId}`} value={`${device.deviceId} : ${device.groupId}`}>{device.label}</option>
              )
            })
          }
        </select>
      </div>

      <div>
        <label htmlFor="inputDeviceSelection">Choose input device:</label>

        <select name="devices" id="inputDeviceSelection" onChange={handleInputSelection} value={selectedInputDevice}>
          <option value="">--Please choose an option--</option>
          {
            inputDevices.map(device => {
              return (
                <option key={`${device.deviceId} : ${device.groupId}`} value={`${device.deviceId} : ${device.groupId}`}>{device.label}</option>
              )
            })
          }
        </select>
      </div>

    </div>
  )
}

export default DeviceSelection
