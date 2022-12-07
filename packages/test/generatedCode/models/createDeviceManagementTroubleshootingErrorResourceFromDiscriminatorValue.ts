import {DeviceManagementTroubleshootingErrorResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingErrorResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingErrorResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingErrorResource();
}
