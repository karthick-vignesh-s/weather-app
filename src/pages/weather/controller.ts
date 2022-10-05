import locations from '../../test-data/cities-fr.json';
import {useState} from "react";

export type Location = {
    id: number
    nm: string
    lat: number
    lon: number
}

export function useWeatherController() {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    return ({
        dropdownItems: locations.map((location) => ({
                label: location.nm,
                value: location
            })
        ),
        selectedLocation,
        handleDropdownValueChanged: (item: Location) => {
            setSelectedLocation(item)
        },
    })
}
