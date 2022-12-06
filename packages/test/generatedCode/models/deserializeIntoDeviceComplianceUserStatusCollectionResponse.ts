import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceComplianceUserStatus} from './deserializeIntoDeviceComplianceUserStatus';
import {DeviceComplianceUserStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserStatusCollectionResponse(deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceUserStatusCollectionResponse),
        "value": n => { deviceComplianceUserStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceUserStatus) as any ; },
    }
}
