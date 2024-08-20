import { StyledForecast } from "./Forecast.style"

interface ForecastProps{
    day: string,
    min: string | number, 
    max: string | number, 
    condition: string,
    large?: boolean
}

export const Forecast = ({day, min, max, condition, large}: ForecastProps) => {
    return(
        <StyledForecast large={large} min={min}>
            <p>{day}</p>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p>Condição: {condition}</p>
        </StyledForecast>
    )
}