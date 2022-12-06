import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration} from './deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration';
import {DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse(deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse: DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse),
        "value": n => { deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration) as any ; },
    }
}
