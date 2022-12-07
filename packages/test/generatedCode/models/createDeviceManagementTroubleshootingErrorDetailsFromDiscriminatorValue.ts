import {DeviceManagementTroubleshootingErrorDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingErrorDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingErrorDetails();
}
