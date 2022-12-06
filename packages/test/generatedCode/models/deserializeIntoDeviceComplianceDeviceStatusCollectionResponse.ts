import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceComplianceDeviceStatus} from './deserializeIntoDeviceComplianceDeviceStatus';
import {DeviceComplianceDeviceStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceStatusCollectionResponse(deviceComplianceDeviceStatusCollectionResponse: DeviceComplianceDeviceStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceDeviceStatusCollectionResponse),
        "value": n => { deviceComplianceDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceComplianceDeviceStatus) as any ; },
    }
}
