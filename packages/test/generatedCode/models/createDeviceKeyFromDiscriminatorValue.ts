import {DeviceKey} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceKey {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceKey();
}
