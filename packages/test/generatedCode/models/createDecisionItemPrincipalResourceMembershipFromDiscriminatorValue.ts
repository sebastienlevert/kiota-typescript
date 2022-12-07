import {DecisionItemPrincipalResourceMembership} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDecisionItemPrincipalResourceMembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) : DecisionItemPrincipalResourceMembership {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DecisionItemPrincipalResourceMembership();
}
