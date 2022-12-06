import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration';
import {DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse(deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse: DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse),
        "value": n => { deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration) as any ; },
    }
}
