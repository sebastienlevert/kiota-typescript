import {EducationAssignmentRecipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentRecipient(educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentRecipient.odataType = n.getStringValue() as any ; },
    }
}
