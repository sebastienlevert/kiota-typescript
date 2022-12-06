import {deserializeIntoEducationSubmissionRecipient} from './deserializeIntoEducationSubmissionRecipient';
import {EducationSubmissionIndividualRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionIndividualRecipient(educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationSubmissionRecipient(educationSubmissionIndividualRecipient),
        "userId": n => { educationSubmissionIndividualRecipient.userId = n.getStringValue() as any ; },
    }
}
