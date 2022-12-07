import {UserConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserConfiguration();
}
