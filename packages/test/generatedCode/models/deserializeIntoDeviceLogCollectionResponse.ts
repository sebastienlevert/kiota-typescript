import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceLogCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceLogCollectionResponse(deviceLogCollectionResponse: DeviceLogCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceLogCollectionResponse),
        "enrolledByUser": n => { deviceLogCollectionResponse.enrolledByUser = n.getStringValue() as any ; },
        "errorCode": n => { deviceLogCollectionResponse.errorCode = n.getNumberValue() as any ; },
        "expirationDateTimeUTC": n => { deviceLogCollectionResponse.expirationDateTimeUTC = n.getDateValue() as any ; },
        "initiatedByUserPrincipalName": n => { deviceLogCollectionResponse.initiatedByUserPrincipalName = n.getStringValue() as any ; },
        "managedDeviceId": n => { deviceLogCollectionResponse.managedDeviceId = n.getStringValue() as any ; },
        "receivedDateTimeUTC": n => { deviceLogCollectionResponse.receivedDateTimeUTC = n.getDateValue() as any ; },
        "requestedDateTimeUTC": n => { deviceLogCollectionResponse.requestedDateTimeUTC = n.getDateValue() as any ; },
        "size": n => { deviceLogCollectionResponse.size = n.getNumberValue() as any ; },
        "status": n => { deviceLogCollectionResponse.status = n.getStringValue() as any ; },
    }
}
