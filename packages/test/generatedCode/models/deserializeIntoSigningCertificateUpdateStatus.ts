import {SigningCertificateUpdateStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSigningCertificateUpdateStatus(signingCertificateUpdateStatus: SigningCertificateUpdateStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateUpdateResult": n => { signingCertificateUpdateStatus.certificateUpdateResult = n.getStringValue() as any ; },
        "lastRunDateTime": n => { signingCertificateUpdateStatus.lastRunDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { signingCertificateUpdateStatus.odataType = n.getStringValue() as any ; },
    }
}
