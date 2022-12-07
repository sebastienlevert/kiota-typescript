import {PlannerTeamsPublicationInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTeamsPublicationInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTeamsPublicationInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTeamsPublicationInfo();
}
