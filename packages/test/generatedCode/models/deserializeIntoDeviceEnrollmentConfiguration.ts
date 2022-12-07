import {deserializeIntoEnrollmentConfigurationAssignment} from './deserializeIntoEnrollmentConfigurationAssignment';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceEnrollmentConfigurationType} from './deviceEnrollmentConfigurationType';
import {DeviceEnrollmentConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentConfiguration: DeviceEnrollmentConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceEnrollmentConfiguration),
        "assignments": n => { deviceEnrollmentConfiguration.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEnrollmentConfigurationAssignment) as any ; },
        "createdDateTime": n => { deviceEnrollmentConfiguration.createdDateTime = n.getDateValue() as any ; },
        "description": n => { deviceEnrollmentConfiguration.description = n.getStringValue() as any ; },
        "deviceEnrollmentConfigurationType": n => { deviceEnrollmentConfiguration.deviceEnrollmentConfigurationType = n.getEnumValue<DeviceEnrollmentConfigurationType>(DeviceEnrollmentConfigurationType) as any ; },
        "displayName": n => { deviceEnrollmentConfiguration.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { deviceEnrollmentConfiguration.lastModifiedDateTime = n.getDateValue() as any ; },
        "priority": n => { deviceEnrollmentConfiguration.priority = n.getNumberValue() as any ; },
        "roleScopeTagIds": n => { deviceEnrollmentConfiguration.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "version": n => { deviceEnrollmentConfiguration.version = n.getNumberValue() as any ; },
    }
}
