import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPhysicalOfficeAddress} from './deserializeIntoPhysicalOfficeAddress';
import {PhysicalOfficeAddressCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalOfficeAddressCollectionResponse(physicalOfficeAddressCollectionResponse: PhysicalOfficeAddressCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(physicalOfficeAddressCollectionResponse),
        "value": n => { physicalOfficeAddressCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhysicalOfficeAddress) as any ; },
    }
}
