import {WritebackConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWritebackConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WritebackConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WritebackConfiguration();
}
