import {PlannerPlanContextCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanContextCollection(plannerPlanContextCollection: PlannerPlanContextCollection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
