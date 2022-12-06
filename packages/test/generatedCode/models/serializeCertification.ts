import {Certification} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertification(writer: SerializationWriter, certification: Certification | undefined = {}) : void {
            writer.writeStringValue("certificationDetailsUrl", certification.certificationDetailsUrl);
            writer.writeDateValue("certificationExpirationDateTime", certification.certificationExpirationDateTime);
            writer.writeBooleanValue("isCertifiedByMicrosoft", certification.isCertifiedByMicrosoft);
            writer.writeBooleanValue("isPublisherAttested", certification.isPublisherAttested);
            writer.writeDateValue("lastCertificationDateTime", certification.lastCertificationDateTime);
            writer.writeStringValue("@odata.type", certification.odataType);
}
