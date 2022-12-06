import {DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentPlatformRestrictionsConfiguration} from './serializeDeviceEnrollmentPlatformRestrictionsConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse(writer: SerializationWriter, deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse: DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse.value as any, serializeDeviceEnrollmentPlatformRestrictionsConfiguration);
}
