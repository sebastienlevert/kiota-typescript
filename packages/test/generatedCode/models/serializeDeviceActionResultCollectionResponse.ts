import {DeviceActionResultCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceActionResultCollectionResponse(writer: SerializationWriter, deviceActionResultCollectionResponse: DeviceActionResultCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceActionResultCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceActionResultCollectionResponse.value as any, serializeDeviceActionResult);
}
