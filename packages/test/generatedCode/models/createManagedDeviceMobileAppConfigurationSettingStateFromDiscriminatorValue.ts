import {ManagedDeviceMobileAppConfigurationSettingState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationSettingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationSettingState();
}
