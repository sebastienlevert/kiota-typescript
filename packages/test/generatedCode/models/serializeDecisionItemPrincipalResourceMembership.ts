import {DecisionItemPrincipalResourceMembershipType} from './decisionItemPrincipalResourceMembershipType';
import {DecisionItemPrincipalResourceMembership} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDecisionItemPrincipalResourceMembership(writer: SerializationWriter, decisionItemPrincipalResourceMembership: DecisionItemPrincipalResourceMembership | undefined = {}) : void {
            writer.writeEnumValue<DecisionItemPrincipalResourceMembershipType>("membershipType", decisionItemPrincipalResourceMembership.membershipType);
}
