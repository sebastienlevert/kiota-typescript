import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentGroupRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGroupRecipient(educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentGroupRecipient),
    }
}
