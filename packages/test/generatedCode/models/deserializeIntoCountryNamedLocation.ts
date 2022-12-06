import {CountryLookupMethodType} from './countryLookupMethodType';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {CountryNamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountryNamedLocation(countryNamedLocation: CountryNamedLocation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoNamedLocation(countryNamedLocation),
        "countriesAndRegions": n => { countryNamedLocation.countriesAndRegions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "countryLookupMethod": n => { countryNamedLocation.countryLookupMethod = n.getEnumValue<CountryLookupMethodType>(CountryLookupMethodType) as any ; },
        "includeUnknownCountriesAndRegions": n => { countryNamedLocation.includeUnknownCountriesAndRegions = n.getBooleanValue() as any ; },
    }
}
