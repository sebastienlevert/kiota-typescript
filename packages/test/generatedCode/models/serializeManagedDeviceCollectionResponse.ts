import {ManagedDeviceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDevice} from './serializeManagedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceCollectionResponse(writer: SerializationWriter, managedDeviceCollectionResponse: ManagedDeviceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedDeviceCollectionResponse.value as any, serializeManagedDevice);
}
