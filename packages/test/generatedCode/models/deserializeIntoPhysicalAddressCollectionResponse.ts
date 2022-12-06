import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {PhysicalAddressCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalAddressCollectionResponse(physicalAddressCollectionResponse: PhysicalAddressCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(physicalAddressCollectionResponse),
        "value": n => { physicalAddressCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhysicalAddress) as any ; },
    }
}
