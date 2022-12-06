import {SigningCertificateUpdateStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSigningCertificateUpdateStatus(writer: SerializationWriter, signingCertificateUpdateStatus: SigningCertificateUpdateStatus | undefined = {}) : void {
            writer.writeStringValue("certificateUpdateResult", signingCertificateUpdateStatus.certificateUpdateResult);
            writer.writeDateValue("lastRunDateTime", signingCertificateUpdateStatus.lastRunDateTime);
            writer.writeStringValue("@odata.type", signingCertificateUpdateStatus.odataType);
}
