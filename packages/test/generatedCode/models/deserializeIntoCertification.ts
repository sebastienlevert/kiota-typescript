import {Certification} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertification(certification: Certification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificationDetailsUrl": n => { certification.certificationDetailsUrl = n.getStringValue() as any ; },
        "certificationExpirationDateTime": n => { certification.certificationExpirationDateTime = n.getDateValue() as any ; },
        "isCertifiedByMicrosoft": n => { certification.isCertifiedByMicrosoft = n.getBooleanValue() as any ; },
        "isPublisherAttested": n => { certification.isPublisherAttested = n.getBooleanValue() as any ; },
        "lastCertificationDateTime": n => { certification.lastCertificationDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { certification.odataType = n.getStringValue() as any ; },
    }
}
