import { useState } from "react";
import {
  Button,
  Card,
  Container,
  HStack,
  Input,
  Label,
  Span,
  VStack,
} from "./Component";
import { weather_details } from "./Type";
import { getCoordinate, getWeatherDetails } from "./weatherApi";

function HomePage() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState<weather_details>();

  async function handleSumbit() {
    const coordinate = await getCoordinate(city);
    if (coordinate) {
      const weatherDetails = await getWeatherDetails(
        coordinate.lat,
        coordinate.lon
      );
      if (weatherDetails) {
        setData(weatherDetails);
      }
    }
  }

  return (
    <Container>
      <div className="heading">Weather App</div>
      <div className="field">
        <Input
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        ></Input>
        <Input
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        ></Input>
        <Button onClick={handleSumbit}>Submit</Button>
      </div>

      {data ? (
        <>
          <Card>
            <div className="header">
              {data?.name}, {data?.country}. Weather
            </div>
            <p className="subheader">As of {data?.time.toLocaleTimeString()}</p>
            <div className="temperature">
              <div className="temp">{data?.temperature}º</div>
              <div className="vstack">
                <img id="image" className="icon" src={data?.weather_icon}></img>
                <Label htmlFor="image">{data?.weather_main}</Label>
              </div>
            </div>
            <p className="footer">{data?.weather_desc}</p>
          </Card>
          <div className="detail-block">
            <VStack className="left-detail-block">
              <HStack>
                <Label>High/Low</Label>
                <Span>
                  {data?.high}/{data?.low}
                </Span>
              </HStack>
              <HStack>
                <Label>Humidity</Label>
                <Span>{data?.humidity} %</Span>
              </HStack>
              <HStack>
                <Label>Pressure</Label>
                <Span>{data?.pressure} hPa</Span>
              </HStack>
              <HStack>
                <Label>Visibility</Label>
                <Span>{data?.visibility} Km</Span>
              </HStack>
            </VStack>
            <VStack className="right-detail-block">
              <HStack>
                <Label>Wind</Label>
                <Span>{data?.wind} km/hr</Span>
              </HStack>
              <HStack>
                <Label>Wind Direction</Label>
                <Span>{data?.wind_dir}º deg</Span>
              </HStack>
              <HStack>
                <Label>Sunrise</Label>
                <Span>{data?.sunrise.toLocaleTimeString()}</Span>
              </HStack>
              <HStack>
                <Label>Sunset</Label>
                <Span>{data?.sunset.toLocaleTimeString()}</Span>
              </HStack>
            </VStack>
          </div>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

export default HomePage;