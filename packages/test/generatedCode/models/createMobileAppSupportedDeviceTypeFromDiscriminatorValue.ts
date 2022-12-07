import {MobileAppSupportedDeviceType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppSupportedDeviceTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppSupportedDeviceType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppSupportedDeviceType();
}
