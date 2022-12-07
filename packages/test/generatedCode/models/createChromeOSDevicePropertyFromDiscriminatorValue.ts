import {ChromeOSDeviceProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChromeOSDevicePropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChromeOSDeviceProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChromeOSDeviceProperty();
}
