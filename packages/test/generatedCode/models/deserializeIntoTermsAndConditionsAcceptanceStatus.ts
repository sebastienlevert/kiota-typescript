import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTermsAndConditions} from './deserializeIntoTermsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAcceptanceStatus(termsAndConditionsAcceptanceStatus: TermsAndConditionsAcceptanceStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsAndConditionsAcceptanceStatus),
        "acceptedDateTime": n => { termsAndConditionsAcceptanceStatus.acceptedDateTime = n.getDateValue() as any ; },
        "acceptedVersion": n => { termsAndConditionsAcceptanceStatus.acceptedVersion = n.getNumberValue() as any ; },
        "termsAndConditions": n => { termsAndConditionsAcceptanceStatus.termsAndConditions = n.getObject(deserializeIntoTermsAndConditions) as any ; },
        "userDisplayName": n => { termsAndConditionsAcceptanceStatus.userDisplayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { termsAndConditionsAcceptanceStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
