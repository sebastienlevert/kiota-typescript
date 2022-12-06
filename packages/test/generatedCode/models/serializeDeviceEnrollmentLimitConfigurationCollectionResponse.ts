import {DeviceEnrollmentLimitConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentLimitConfiguration} from './serializeDeviceEnrollmentLimitConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentLimitConfigurationCollectionResponse(writer: SerializationWriter, deviceEnrollmentLimitConfigurationCollectionResponse: DeviceEnrollmentLimitConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentLimitConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceEnrollmentLimitConfigurationCollectionResponse.value as any, serializeDeviceEnrollmentLimitConfiguration);
}
