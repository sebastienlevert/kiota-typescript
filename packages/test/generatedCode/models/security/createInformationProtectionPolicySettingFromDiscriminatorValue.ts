import {InformationProtectionPolicySetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionPolicySettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationProtectionPolicySetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationProtectionPolicySetting();
}
