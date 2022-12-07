import {ConfigurationManagerClientInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerClientInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationManagerClientInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationManagerClientInformation();
}
