import {DeviceAndAppManagementAssignmentTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementAssignmentTarget(deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceAndAppManagementAssignmentTarget.odataType = n.getStringValue() as any ; },
    }
}
