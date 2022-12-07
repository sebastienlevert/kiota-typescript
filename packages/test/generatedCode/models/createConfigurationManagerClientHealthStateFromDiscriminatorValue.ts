import {ConfigurationManagerClientHealthState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientHealthStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationManagerClientHealthState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationManagerClientHealthState();
}
