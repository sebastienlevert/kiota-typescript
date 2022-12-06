import {MobileAppAssignment} from './index';
import {InstallIntent} from './installIntent';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignment(writer: SerializationWriter, mobileAppAssignment: MobileAppAssignment | undefined = {}) : void {
        serializeEntity(writer, mobileAppAssignment)
            writer.writeEnumValue<InstallIntent>("intent", mobileAppAssignment.intent);
            writer.writeObjectValueFromMethod("settings", mobileAppAssignment.settings as any, serializeMobileAppAssignmentSettings);
            writer.writeObjectValueFromMethod("target", mobileAppAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}
