import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcome(educationOutcome: EducationOutcome | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationOutcome),
        "lastModifiedBy": n => { educationOutcome.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { educationOutcome.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
