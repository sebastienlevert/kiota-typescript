import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCountryNamedLocation} from './deserializeIntoCountryNamedLocation';
import {CountryNamedLocationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountryNamedLocationCollectionResponse(countryNamedLocationCollectionResponse: CountryNamedLocationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(countryNamedLocationCollectionResponse),
        "value": n => { countryNamedLocationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCountryNamedLocation) as any ; },
    }
}
