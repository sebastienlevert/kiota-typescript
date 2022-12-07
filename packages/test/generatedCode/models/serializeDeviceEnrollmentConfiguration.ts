import {DeviceEnrollmentConfigurationType} from './deviceEnrollmentConfigurationType';
import {DeviceEnrollmentConfiguration} from './index';
import {serializeEnrollmentConfigurationAssignment} from './serializeEnrollmentConfigurationAssignment';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentConfiguration(writer: SerializationWriter, deviceEnrollmentConfiguration: DeviceEnrollmentConfiguration | undefined = {}) : void {
        serializeEntity(writer, deviceEnrollmentConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", deviceEnrollmentConfiguration.assignments as any, serializeEnrollmentConfigurationAssignment);
            writer.writeDateValue("createdDateTime", deviceEnrollmentConfiguration.createdDateTime);
            writer.writeStringValue("description", deviceEnrollmentConfiguration.description);
            writer.writeEnumValue<DeviceEnrollmentConfigurationType>("deviceEnrollmentConfigurationType", deviceEnrollmentConfiguration.deviceEnrollmentConfigurationType);
            writer.writeStringValue("displayName", deviceEnrollmentConfiguration.displayName);
            writer.writeDateValue("lastModifiedDateTime", deviceEnrollmentConfiguration.lastModifiedDateTime);
            writer.writeNumberValue("priority", deviceEnrollmentConfiguration.priority);
            writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", deviceEnrollmentConfiguration.roleScopeTagIds);
            writer.writeNumberValue("version", deviceEnrollmentConfiguration.version);
}
