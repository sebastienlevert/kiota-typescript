import {PlannerTaskCreation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskCreationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskCreation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskCreation();
}
