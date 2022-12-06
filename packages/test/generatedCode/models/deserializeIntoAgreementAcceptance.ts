import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AgreementAcceptance} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementAcceptance(agreementAcceptance: AgreementAcceptance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreementAcceptance),
        "agreementFileId": n => { agreementAcceptance.agreementFileId = n.getStringValue() as any ; },
        "agreementId": n => { agreementAcceptance.agreementId = n.getStringValue() as any ; },
        "deviceDisplayName": n => { agreementAcceptance.deviceDisplayName = n.getStringValue() as any ; },
        "deviceId": n => { agreementAcceptance.deviceId = n.getStringValue() as any ; },
        "deviceOSType": n => { agreementAcceptance.deviceOSType = n.getStringValue() as any ; },
        "deviceOSVersion": n => { agreementAcceptance.deviceOSVersion = n.getStringValue() as any ; },
        "expirationDateTime": n => { agreementAcceptance.expirationDateTime = n.getDateValue() as any ; },
        "recordedDateTime": n => { agreementAcceptance.recordedDateTime = n.getDateValue() as any ; },
        "state": n => { agreementAcceptance.state = n.getEnumValue<AgreementAcceptanceState>(AgreementAcceptanceState) as any ; },
        "userDisplayName": n => { agreementAcceptance.userDisplayName = n.getStringValue() as any ; },
        "userEmail": n => { agreementAcceptance.userEmail = n.getStringValue() as any ; },
        "userId": n => { agreementAcceptance.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { agreementAcceptance.userPrincipalName = n.getStringValue() as any ; },
    }
}
