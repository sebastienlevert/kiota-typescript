import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {DeviceEnrollmentConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentConfigurationCollectionResponse(deviceEnrollmentConfigurationCollectionResponse: DeviceEnrollmentConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceEnrollmentConfigurationCollectionResponse),
        "value": n => { deviceEnrollmentConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceEnrollmentConfiguration) as any ; },
    }
}
