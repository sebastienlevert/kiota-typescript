import {PrintCertificateSigningRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintCertificateSigningRequest(writer: SerializationWriter, printCertificateSigningRequest: PrintCertificateSigningRequest | undefined = {}) : void {
            writer.writeStringValue("content", printCertificateSigningRequest.content);
            writer.writeStringValue("@odata.type", printCertificateSigningRequest.odataType);
            writer.writeStringValue("transportKey", printCertificateSigningRequest.transportKey);
}
