import {PlannerRecentPlanReferenceCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerRecentPlanReferenceCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerRecentPlanReferenceCollection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerRecentPlanReferenceCollection();
}
