import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentClassRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentClassRecipient(educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentClassRecipient),
    }
}
