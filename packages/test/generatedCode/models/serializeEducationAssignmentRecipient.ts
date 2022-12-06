import {EducationAssignmentRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentRecipient(writer: SerializationWriter, educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {}) : void {
            writer.writeStringValue("@odata.type", educationAssignmentRecipient.odataType);
}
