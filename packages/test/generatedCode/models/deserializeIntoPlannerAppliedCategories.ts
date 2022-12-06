import {PlannerAppliedCategories} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAppliedCategories(plannerAppliedCategories: PlannerAppliedCategories | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerAppliedCategories.odataType = n.getStringValue() as any ; },
    }
}
