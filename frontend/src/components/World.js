import React from "react"
import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from "react-simple-maps"

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json"

export default function World({ selectedCountries, onSelect }) {
    return (
        <ComposableMap projection="geoMercator">
            <ZoomableGroup center={[0, 50]} zoom={1}>
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
                                            fill: "#17159B",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#17159B",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#17159B",
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
                                        fill: "#17159B",
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
    )
}
