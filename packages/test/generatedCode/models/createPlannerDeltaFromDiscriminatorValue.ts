import {PlannerDelta} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerDeltaFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerDelta {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerDelta();
}
