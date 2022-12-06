import {EducationAssignmentGroupRecipient} from './index';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGroupRecipient(writer: SerializationWriter, educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {}) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentGroupRecipient)
}
