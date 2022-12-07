import {DeviceLogCollectionResponse} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceLogCollectionResponse(writer: SerializationWriter, deviceLogCollectionResponse: DeviceLogCollectionResponse | undefined = {}) : void {
        serializeEntity(writer, deviceLogCollectionResponse)
            writer.writeStringValue("enrolledByUser", deviceLogCollectionResponse.enrolledByUser);
            writer.writeNumberValue("errorCode", deviceLogCollectionResponse.errorCode);
            writer.writeDateValue("expirationDateTimeUTC", deviceLogCollectionResponse.expirationDateTimeUTC);
            writer.writeStringValue("initiatedByUserPrincipalName", deviceLogCollectionResponse.initiatedByUserPrincipalName);
            writer.writeStringValue("managedDeviceId", deviceLogCollectionResponse.managedDeviceId);
            writer.writeDateValue("receivedDateTimeUTC", deviceLogCollectionResponse.receivedDateTimeUTC);
            writer.writeDateValue("requestedDateTimeUTC", deviceLogCollectionResponse.requestedDateTimeUTC);
            writer.writeNumberValue("size", deviceLogCollectionResponse.size);
            writer.writeStringValue("status", deviceLogCollectionResponse.status);
}
