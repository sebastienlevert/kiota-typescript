import {PlannerOrderHintsByAssignee} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerOrderHintsByAssignee(plannerOrderHintsByAssignee: PlannerOrderHintsByAssignee | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerOrderHintsByAssignee.odataType = n.getStringValue() as any ; },
    }
}
