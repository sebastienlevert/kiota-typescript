import {CountryNamedLocationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCountryNamedLocation} from './serializeCountryNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountryNamedLocationCollectionResponse(writer: SerializationWriter, countryNamedLocationCollectionResponse: CountryNamedLocationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, countryNamedLocationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", countryNamedLocationCollectionResponse.value as any, serializeCountryNamedLocation);
}
