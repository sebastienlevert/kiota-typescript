import {PlannerPlanContextCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanContextCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanContextCollection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanContextCollection();
}
