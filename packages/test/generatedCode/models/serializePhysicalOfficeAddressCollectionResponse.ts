import {PhysicalOfficeAddressCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePhysicalOfficeAddress} from './serializePhysicalOfficeAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalOfficeAddressCollectionResponse(writer: SerializationWriter, physicalOfficeAddressCollectionResponse: PhysicalOfficeAddressCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, physicalOfficeAddressCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", physicalOfficeAddressCollectionResponse.value as any, serializePhysicalOfficeAddress);
}
