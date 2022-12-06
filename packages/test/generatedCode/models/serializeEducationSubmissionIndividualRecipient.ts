import {EducationSubmissionIndividualRecipient} from './index';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionIndividualRecipient(writer: SerializationWriter, educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {}) : void {
        serializeEducationSubmissionRecipient(writer, educationSubmissionIndividualRecipient)
            writer.writeStringValue("userId", educationSubmissionIndividualRecipient.userId);
}
