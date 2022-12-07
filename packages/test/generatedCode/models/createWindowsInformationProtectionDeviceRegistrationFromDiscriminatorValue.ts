import {WindowsInformationProtectionDeviceRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDeviceRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionDeviceRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionDeviceRegistration();
}
