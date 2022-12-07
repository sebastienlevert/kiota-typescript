import {InformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationProtectionPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationProtectionPolicy();
}
