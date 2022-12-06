import {AssignmentOrder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignmentOrder(writer: SerializationWriter, assignmentOrder: AssignmentOrder | undefined = {}) : void {
            writer.writeStringValue("@odata.type", assignmentOrder.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("order", assignmentOrder.order);
}
