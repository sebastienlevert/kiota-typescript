import {DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentWindowsHelloForBusinessConfiguration} from './serializeDeviceEnrollmentWindowsHelloForBusinessConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse(writer: SerializationWriter, deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse: DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse.value as any, serializeDeviceEnrollmentWindowsHelloForBusinessConfiguration);
}
