import {WindowsProtectionState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsProtectionStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsProtectionState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsProtectionState();
}
