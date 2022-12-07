import {MembershipRuleProcessingStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembershipRuleProcessingStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembershipRuleProcessingStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembershipRuleProcessingStatus();
}
