import {PlannerAssignments} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAssignments(plannerAssignments: PlannerAssignments | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerAssignments.odataType = n.getStringValue() as any ; },
    }
}
