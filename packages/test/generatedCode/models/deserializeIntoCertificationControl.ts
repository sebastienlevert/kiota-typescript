import {CertificationControl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificationControl(certificationControl: CertificationControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { certificationControl.name = n.getStringValue() as any ; },
        "@odata.type": n => { certificationControl.odataType = n.getStringValue() as any ; },
        "url": n => { certificationControl.url = n.getStringValue() as any ; },
    }
}
