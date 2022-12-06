import {IosUpdateDeviceStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosUpdateDeviceStatus} from './serializeIosUpdateDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateDeviceStatusCollectionResponse(writer: SerializationWriter, iosUpdateDeviceStatusCollectionResponse: IosUpdateDeviceStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosUpdateDeviceStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosUpdateDeviceStatusCollectionResponse.value as any, serializeIosUpdateDeviceStatus);
}
