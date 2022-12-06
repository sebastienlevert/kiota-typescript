import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTermsAndConditionsAcceptanceStatus} from './deserializeIntoTermsAndConditionsAcceptanceStatus';
import {deserializeIntoTermsAndConditionsAssignment} from './deserializeIntoTermsAndConditionsAssignment';
import {TermsAndConditions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditions(termsAndConditions: TermsAndConditions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsAndConditions),
        "acceptanceStatement": n => { termsAndConditions.acceptanceStatement = n.getStringValue() as any ; },
        "acceptanceStatuses": n => { termsAndConditions.acceptanceStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditionsAcceptanceStatus) as any ; },
        "assignments": n => { termsAndConditions.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditionsAssignment) as any ; },
        "bodyText": n => { termsAndConditions.bodyText = n.getStringValue() as any ; },
        "createdDateTime": n => { termsAndConditions.createdDateTime = n.getDateValue() as any ; },
        "description": n => { termsAndConditions.description = n.getStringValue() as any ; },
        "displayName": n => { termsAndConditions.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { termsAndConditions.lastModifiedDateTime = n.getDateValue() as any ; },
        "title": n => { termsAndConditions.title = n.getStringValue() as any ; },
        "version": n => { termsAndConditions.version = n.getNumberValue() as any ; },
    }
}
