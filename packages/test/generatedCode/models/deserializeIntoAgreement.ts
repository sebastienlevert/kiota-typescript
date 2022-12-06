import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {deserializeIntoAgreementFile} from './deserializeIntoAgreementFile';
import {deserializeIntoAgreementFileLocalization} from './deserializeIntoAgreementFileLocalization';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTermsExpiration} from './deserializeIntoTermsExpiration';
import {Agreement} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreement(agreement: Agreement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreement),
        "acceptances": n => { agreement.acceptances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementAcceptance) as any ; },
        "displayName": n => { agreement.displayName = n.getStringValue() as any ; },
        "file": n => { agreement.file = n.getObject(deserializeIntoAgreementFile) as any ; },
        "files": n => { agreement.files = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementFileLocalization) as any ; },
        "isPerDeviceAcceptanceRequired": n => { agreement.isPerDeviceAcceptanceRequired = n.getBooleanValue() as any ; },
        "isViewingBeforeAcceptanceRequired": n => { agreement.isViewingBeforeAcceptanceRequired = n.getBooleanValue() as any ; },
        "termsExpiration": n => { agreement.termsExpiration = n.getObject(deserializeIntoTermsExpiration) as any ; },
        "userReacceptRequiredFrequency": n => { agreement.userReacceptRequiredFrequency = n.getDurationValue() as any ; },
    }
}
