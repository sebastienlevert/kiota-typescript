import {AvailabilityItemCollectionResponse} from './index';
import {serializeAvailabilityItem} from './serializeAvailabilityItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailabilityItemCollectionResponse(writer: SerializationWriter, availabilityItemCollectionResponse: AvailabilityItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, availabilityItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", availabilityItemCollectionResponse.value as any, serializeAvailabilityItem);
}
