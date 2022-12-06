import {deserializeIntoAssignedLabel} from './deserializeIntoAssignedLabel';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AssignedLabelCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLabelCollectionResponse(assignedLabelCollectionResponse: AssignedLabelCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignedLabelCollectionResponse),
        "value": n => { assignedLabelCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLabel) as any ; },
    }
}
