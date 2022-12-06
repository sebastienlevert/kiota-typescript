import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRegistryKeyState} from './deserializeIntoRegistryKeyState';
import {RegistryKeyStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryKeyStateCollectionResponse(registryKeyStateCollectionResponse: RegistryKeyStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(registryKeyStateCollectionResponse),
        "value": n => { registryKeyStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRegistryKeyState) as any ; },
    }
}
