import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignmentResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentResource(educationAssignmentResource: EducationAssignmentResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentResource),
        "distributeForStudentWork": n => { educationAssignmentResource.distributeForStudentWork = n.getBooleanValue() as any ; },
        "resource": n => { educationAssignmentResource.resource = n.getObject(deserializeIntoEducationResource) as any ; },
    }
}
