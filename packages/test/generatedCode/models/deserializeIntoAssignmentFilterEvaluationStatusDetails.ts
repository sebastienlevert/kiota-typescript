import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AssignmentFilterEvaluationStatusDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignmentFilterEvaluationStatusDetails(assignmentFilterEvaluationStatusDetails: AssignmentFilterEvaluationStatusDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(assignmentFilterEvaluationStatusDetails),
        "payloadId": n => { assignmentFilterEvaluationStatusDetails.payloadId = n.getStringValue() as any ; },
    }
}
