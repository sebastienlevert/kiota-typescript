import {DeviceHealth} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceHealthFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceHealth {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceHealth();
}
