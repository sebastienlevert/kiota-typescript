import {DeviceAndAppManagementAssignmentTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementAssignmentTarget(writer: SerializationWriter, deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {}) : void {
            writer.writeStringValue("@odata.type", deviceAndAppManagementAssignmentTarget.odataType);
}
