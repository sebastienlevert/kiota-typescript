import {PlannerPlanCreation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanCreationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanCreation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanCreation();
}
