import {AssignmentFilterEvaluationStatusDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignmentFilterEvaluationStatusDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignmentFilterEvaluationStatusDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignmentFilterEvaluationStatusDetails();
}
