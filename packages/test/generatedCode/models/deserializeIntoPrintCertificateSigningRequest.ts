import {PrintCertificateSigningRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintCertificateSigningRequest(printCertificateSigningRequest: PrintCertificateSigningRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { printCertificateSigningRequest.content = n.getStringValue() as any ; },
        "@odata.type": n => { printCertificateSigningRequest.odataType = n.getStringValue() as any ; },
        "transportKey": n => { printCertificateSigningRequest.transportKey = n.getStringValue() as any ; },
    }
}
