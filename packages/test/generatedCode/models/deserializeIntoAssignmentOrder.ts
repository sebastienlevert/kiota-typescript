import {AssignmentOrder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignmentOrder(assignmentOrder: AssignmentOrder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { assignmentOrder.odataType = n.getStringValue() as any ; },
        "order": n => { assignmentOrder.order = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
