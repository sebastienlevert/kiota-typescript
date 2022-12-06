import {RegistryKeyStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRegistryKeyState} from './serializeRegistryKeyState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistryKeyStateCollectionResponse(writer: SerializationWriter, registryKeyStateCollectionResponse: RegistryKeyStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, registryKeyStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", registryKeyStateCollectionResponse.value as any, serializeRegistryKeyState);
}
