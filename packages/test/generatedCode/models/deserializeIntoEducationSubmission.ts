import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {deserializeIntoEducationSubmissionRecipient} from './deserializeIntoEducationSubmissionRecipient';
import {deserializeIntoEducationSubmissionResource} from './deserializeIntoEducationSubmissionResource';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {EducationSubmission} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmission(educationSubmission: EducationSubmission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationSubmission),
        "outcomes": n => { educationSubmission.outcomes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationOutcome) as any ; },
        "reassignedBy": n => { educationSubmission.reassignedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "reassignedDateTime": n => { educationSubmission.reassignedDateTime = n.getDateValue() as any ; },
        "recipient": n => { educationSubmission.recipient = n.getObject(deserializeIntoEducationSubmissionRecipient) as any ; },
        "resources": n => { educationSubmission.resources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSubmissionResource) as any ; },
        "resourcesFolderUrl": n => { educationSubmission.resourcesFolderUrl = n.getStringValue() as any ; },
        "returnedBy": n => { educationSubmission.returnedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "returnedDateTime": n => { educationSubmission.returnedDateTime = n.getDateValue() as any ; },
        "status": n => { educationSubmission.status = n.getEnumValue<EducationSubmissionStatus>(EducationSubmissionStatus) as any ; },
        "submittedBy": n => { educationSubmission.submittedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "submittedDateTime": n => { educationSubmission.submittedDateTime = n.getDateValue() as any ; },
        "submittedResources": n => { educationSubmission.submittedResources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSubmissionResource) as any ; },
        "unsubmittedBy": n => { educationSubmission.unsubmittedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "unsubmittedDateTime": n => { educationSubmission.unsubmittedDateTime = n.getDateValue() as any ; },
    }
}
