import {SharedAppleDeviceUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedAppleDeviceUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedAppleDeviceUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedAppleDeviceUser();
}
