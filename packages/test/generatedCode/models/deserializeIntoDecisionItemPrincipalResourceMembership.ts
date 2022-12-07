import {DecisionItemPrincipalResourceMembershipType} from './decisionItemPrincipalResourceMembershipType';
import {DecisionItemPrincipalResourceMembership} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDecisionItemPrincipalResourceMembership(decisionItemPrincipalResourceMembership: DecisionItemPrincipalResourceMembership | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "membershipType": n => { decisionItemPrincipalResourceMembership.membershipType = n.getEnumValue<DecisionItemPrincipalResourceMembershipType>(DecisionItemPrincipalResourceMembershipType) as any ; },
    }
}
