import {PlannerPlanCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanCreation(plannerPlanCreation: PlannerPlanCreation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "creationSourceKind": n => { plannerPlanCreation.creationSourceKind = n.getEnumValue<PlannerCreationSourceKind>(PlannerCreationSourceKind) as any ; },
    }
}
