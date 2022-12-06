import {EducationTerm} from './index';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTerm(educationTerm: EducationTerm | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { educationTerm.displayName = n.getStringValue() as any ; },
        "endDate": n => { educationTerm.endDate = n.getDateOnlyValue() as any ; },
        "externalId": n => { educationTerm.externalId = n.getStringValue() as any ; },
        "@odata.type": n => { educationTerm.odataType = n.getStringValue() as any ; },
        "startDate": n => { educationTerm.startDate = n.getDateOnlyValue() as any ; },
    }
}
