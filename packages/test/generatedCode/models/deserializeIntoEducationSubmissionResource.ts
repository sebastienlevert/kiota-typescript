import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationSubmissionResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionResource(educationSubmissionResource: EducationSubmissionResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationSubmissionResource),
        "assignmentResourceUrl": n => { educationSubmissionResource.assignmentResourceUrl = n.getStringValue() as any ; },
        "resource": n => { educationSubmissionResource.resource = n.getObject(deserializeIntoEducationResource) as any ; },
    }
}
