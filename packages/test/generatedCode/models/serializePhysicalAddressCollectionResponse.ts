import {PhysicalAddressCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalAddressCollectionResponse(writer: SerializationWriter, physicalAddressCollectionResponse: PhysicalAddressCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, physicalAddressCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", physicalAddressCollectionResponse.value as any, serializePhysicalAddress);
}
