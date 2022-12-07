import {MembershipRuleProcessingStatus} from './index';
import {MembershipRuleProcessingStatusDetails} from './membershipRuleProcessingStatusDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembershipRuleProcessingStatus(writer: SerializationWriter, membershipRuleProcessingStatus: MembershipRuleProcessingStatus | undefined = {}) : void {
            writer.writeStringValue("errorMessage", membershipRuleProcessingStatus.errorMessage);
            writer.writeDateValue("lastMembershipUpdated", membershipRuleProcessingStatus.lastMembershipUpdated);
            writer.writeEnumValue<MembershipRuleProcessingStatusDetails>("status", membershipRuleProcessingStatus.status);
}
