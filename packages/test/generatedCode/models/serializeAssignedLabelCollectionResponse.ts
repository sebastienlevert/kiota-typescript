import {AssignedLabelCollectionResponse} from './index';
import {serializeAssignedLabel} from './serializeAssignedLabel';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLabelCollectionResponse(writer: SerializationWriter, assignedLabelCollectionResponse: AssignedLabelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignedLabelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", assignedLabelCollectionResponse.value as any, serializeAssignedLabel);
}
