import React, {useEffect, useState} from 'react';
import './App.css';
import {TemperatureDisplay} from "./components/temper-view/TemperatureDisplay";
import {changingTemperature} from "./utils/ChangingTemperature";

const App: React.FC<{}> = () => {
    const [temperatureValue, setTemperatureValue] = useState(0);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            const temperature = await changingTemperature();
            setTemperatureValue(temperature);
            setLoading(true)
        })();
    },[])

  return isLoading ? (
    <div className="App">
        <TemperatureDisplay minTemp={-40} maxTemp={110} targetTemp={temperatureValue}/>
    </div>
  ) : (
      <div>Loading</div>
  )
}

export default App
