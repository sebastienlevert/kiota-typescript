import {DeviceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCollectionResponse(writer: SerializationWriter, deviceCollectionResponse: DeviceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCollectionResponse.value as any, serializeDevice);
}
