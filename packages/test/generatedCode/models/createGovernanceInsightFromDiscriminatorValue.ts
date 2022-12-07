import {GovernanceInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGovernanceInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : GovernanceInsight {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GovernanceInsight();
}
