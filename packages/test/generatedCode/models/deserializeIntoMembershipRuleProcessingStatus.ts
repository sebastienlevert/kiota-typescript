import {MembershipRuleProcessingStatus} from './index';
import {MembershipRuleProcessingStatusDetails} from './membershipRuleProcessingStatusDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembershipRuleProcessingStatus(membershipRuleProcessingStatus: MembershipRuleProcessingStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "errorMessage": n => { membershipRuleProcessingStatus.errorMessage = n.getStringValue() as any ; },
        "lastMembershipUpdated": n => { membershipRuleProcessingStatus.lastMembershipUpdated = n.getDateValue() as any ; },
        "status": n => { membershipRuleProcessingStatus.status = n.getEnumValue<MembershipRuleProcessingStatusDetails>(MembershipRuleProcessingStatusDetails) as any ; },
    }
}
