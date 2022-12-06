import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MobileAppAssignment} from './index';
import {InstallIntent} from './installIntent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignment(mobileAppAssignment: MobileAppAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppAssignment),
        "intent": n => { mobileAppAssignment.intent = n.getEnumValue<InstallIntent>(InstallIntent) as any ; },
        "settings": n => { mobileAppAssignment.settings = n.getObject(deserializeIntoMobileAppAssignmentSettings) as any ; },
        "target": n => { mobileAppAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}
