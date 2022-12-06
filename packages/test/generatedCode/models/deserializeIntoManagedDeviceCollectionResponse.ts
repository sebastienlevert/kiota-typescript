import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {ManagedDeviceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceCollectionResponse(managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceCollectionResponse),
        "value": n => { managedDeviceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDevice) as any ; },
    }
}
