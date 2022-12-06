import {EducationSubmissionRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionRecipient(educationSubmissionRecipient: EducationSubmissionRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationSubmissionRecipient.odataType = n.getStringValue() as any ; },
    }
}
