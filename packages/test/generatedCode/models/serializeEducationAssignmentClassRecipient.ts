import {EducationAssignmentClassRecipient} from './index';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentClassRecipient(writer: SerializationWriter, educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {}) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentClassRecipient)
}
