import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentIndividualRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentIndividualRecipient(educationAssignmentIndividualRecipient: EducationAssignmentIndividualRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentIndividualRecipient),
        "recipients": n => { educationAssignmentIndividualRecipient.recipients = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
