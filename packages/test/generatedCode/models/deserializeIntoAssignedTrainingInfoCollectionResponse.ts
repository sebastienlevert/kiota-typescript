import {deserializeIntoAssignedTrainingInfo} from './deserializeIntoAssignedTrainingInfo';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AssignedTrainingInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedTrainingInfoCollectionResponse(assignedTrainingInfoCollectionResponse: AssignedTrainingInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignedTrainingInfoCollectionResponse),
        "value": n => { assignedTrainingInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedTrainingInfo) as any ; },
    }
}
