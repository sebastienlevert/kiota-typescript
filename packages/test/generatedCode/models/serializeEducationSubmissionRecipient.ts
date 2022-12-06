import {EducationSubmissionRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionRecipient(writer: SerializationWriter, educationSubmissionRecipient: EducationSubmissionRecipient | undefined = {}) : void {
            writer.writeStringValue("@odata.type", educationSubmissionRecipient.odataType);
}
