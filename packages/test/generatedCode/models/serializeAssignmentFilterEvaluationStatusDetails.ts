import {AssignmentFilterEvaluationStatusDetails} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignmentFilterEvaluationStatusDetails(writer: SerializationWriter, assignmentFilterEvaluationStatusDetails: AssignmentFilterEvaluationStatusDetails | undefined = {}) : void {
        serializeEntity(writer, assignmentFilterEvaluationStatusDetails)
            writer.writeStringValue("payloadId", assignmentFilterEvaluationStatusDetails.payloadId);
}
