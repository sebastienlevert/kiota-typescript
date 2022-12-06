import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {EducationSubmission} from './index';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmission(writer: SerializationWriter, educationSubmission: EducationSubmission | undefined = {}) : void {
        serializeEntity(writer, educationSubmission)
            writer.writeCollectionOfObjectValuesFromMethod("outcomes", educationSubmission.outcomes as any, serializeEducationOutcome);
            writer.writeObjectValueFromMethod("reassignedBy", educationSubmission.reassignedBy as any, serializeIdentitySet);
            writer.writeDateValue("reassignedDateTime", educationSubmission.reassignedDateTime);
            writer.writeObjectValueFromMethod("recipient", educationSubmission.recipient as any, serializeEducationSubmissionRecipient);
            writer.writeCollectionOfObjectValuesFromMethod("resources", educationSubmission.resources as any, serializeEducationSubmissionResource);
            writer.writeStringValue("resourcesFolderUrl", educationSubmission.resourcesFolderUrl);
            writer.writeObjectValueFromMethod("returnedBy", educationSubmission.returnedBy as any, serializeIdentitySet);
            writer.writeDateValue("returnedDateTime", educationSubmission.returnedDateTime);
            writer.writeEnumValue<EducationSubmissionStatus>("status", educationSubmission.status);
            writer.writeObjectValueFromMethod("submittedBy", educationSubmission.submittedBy as any, serializeIdentitySet);
            writer.writeDateValue("submittedDateTime", educationSubmission.submittedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("submittedResources", educationSubmission.submittedResources as any, serializeEducationSubmissionResource);
            writer.writeObjectValueFromMethod("unsubmittedBy", educationSubmission.unsubmittedBy as any, serializeIdentitySet);
            writer.writeDateValue("unsubmittedDateTime", educationSubmission.unsubmittedDateTime);
}
