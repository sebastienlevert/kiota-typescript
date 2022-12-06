import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceEnrollmentLimitConfiguration} from './deserializeIntoDeviceEnrollmentLimitConfiguration';
import {DeviceEnrollmentLimitConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentLimitConfigurationCollectionResponse(deviceEnrollmentLimitConfigurationCollectionResponse: DeviceEnrollmentLimitConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceEnrollmentLimitConfigurationCollectionResponse),
        "value": n => { deviceEnrollmentLimitConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceEnrollmentLimitConfiguration) as any ; },
    }
}
