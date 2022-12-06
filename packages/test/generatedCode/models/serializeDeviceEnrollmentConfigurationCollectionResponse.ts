import {DeviceEnrollmentConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentConfigurationCollectionResponse(writer: SerializationWriter, deviceEnrollmentConfigurationCollectionResponse: DeviceEnrollmentConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceEnrollmentConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceEnrollmentConfigurationCollectionResponse.value as any, serializeDeviceEnrollmentConfiguration);
}
