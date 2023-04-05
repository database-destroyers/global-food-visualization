import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import React, { useState } from "react"
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from "react-simple-maps"

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json"

export default function World({ selectedCountries, onSelect }) {
    const [position, setPosition] = useState({ coordinates: [0, 50], zoom: 1 });

    const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom + 1 }));
    }

    const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom - 1 }));
    }

    const handleMoveEnd = (position) => {
        setPosition(position);
      }

    return (
        <>
            <ComposableMap projection="geoMercator">
                <ZoomableGroup center={position.coordinates} zoom={position.zoom} onMoveEnd={handleMoveEnd}>
                    <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                    <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const code = geo.properties['Alpha-2'];
                                if (code in selectedCountries) {
                                    return <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={(e) => onSelect(code)}
                                        stroke="#17159B"
                                        strokeWidth="0.2"
                                        style={{
                                            default: {
                                                fill: "#3182CE",
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#D3A5AD",
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#D3A5AD",
                                                outline: "none"
                                            },
                                        }}
                                    />
                                }
                                return <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={(e) => onSelect(code)}
                                    stroke="#17159B"
                                    strokeWidth="0.2"
                                    style={{
                                        default: {
                                            fill: "#A5D3CB",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#319795",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#17159B",
                                            outline: "none"
                                        },
                                    }}
                                />
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ButtonGroup flexDirection='column' borderRadius={5} border='1px' borderColor='gray.300' spacing='0' pos='fixed' bottom='50px' right='50px' background='white'>
                <Button variant='zoom' onClick={handleZoomIn}>
                    <AddIcon color='teal.500' />
                </Button>
                <Button variant='zoom' onClick={handleZoomOut}>
                    <MinusIcon color='teal.500' />
                </Button>
            </ButtonGroup>
        </>
    )
}
