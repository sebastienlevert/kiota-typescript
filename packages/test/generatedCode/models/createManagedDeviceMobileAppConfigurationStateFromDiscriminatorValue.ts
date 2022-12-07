import {ManagedDeviceMobileAppConfigurationState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationState();
}
