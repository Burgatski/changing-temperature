import React from "react";
import "./TemperatureDisplay.css";

// constant to begin the degree count
const ABSOLUTE_MIN_DEG = 45

interface TemperatureDisplayProps {
    minTemp: number
    maxTemp: number
    targetTemp: number
}

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({minTemp, maxTemp, targetTemp}) => {
    let currentDeg
    if(targetTemp > maxTemp){
        targetTemp = maxTemp
    }
    if(targetTemp < minTemp){
        targetTemp = minTemp
    }
    // 270 because 90 degrees is the boundary between the minimum and the maximum temperature
    const multiplier = 270/(Math.abs(minTemp) + maxTemp)
    if(targetTemp === 0){
        currentDeg = (Math.abs(minTemp) * multiplier) + ABSOLUTE_MIN_DEG
    } else if (targetTemp > 0){
        currentDeg = ((Math.abs(minTemp) + targetTemp) * multiplier) + ABSOLUTE_MIN_DEG
    } else {
        console.log('minus', (targetTemp - targetTemp))
        currentDeg = ((Math.abs(minTemp) - Math.abs(targetTemp)) * multiplier) + ABSOLUTE_MIN_DEG
    }

    const style = {
        transform: `rotate(${currentDeg}deg)`,
        transition: 'transform 150ms ease',
    }

    return (
            <div className="app-container">
                <div className="temperature-display-container">
                    <div className="line-target" style={style}/>
                    <div className={`temperature-display`}/>
                    <div className={`line-minus-temperature`}/>
                    <div className={`line-plus-temperature`}/>
                </div>
                <div className="temper-amount-container">
                    {targetTemp}&#8451;
                </div>
            </div>
        )
}