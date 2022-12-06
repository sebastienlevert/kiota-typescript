import {PlannerChecklistItems} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerChecklistItems(plannerChecklistItems: PlannerChecklistItems | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerChecklistItems.odataType = n.getStringValue() as any ; },
    }
}
