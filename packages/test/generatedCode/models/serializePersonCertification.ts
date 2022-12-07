import {PersonCertification} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonCertification(writer: SerializationWriter, personCertification: PersonCertification | undefined = {}) : void {
        serializeItemFacet(writer, personCertification)
            writer.writeStringValue("certificationId", personCertification.certificationId);
            writer.writeStringValue("description", personCertification.description);
            writer.writeStringValue("displayName", personCertification.displayName);
            writer.writeDateOnlyValue("endDate", personCertification.endDate);
            writer.writeDateOnlyValue("issuedDate", personCertification.issuedDate);
            writer.writeStringValue("issuingAuthority", personCertification.issuingAuthority);
            writer.writeStringValue("issuingCompany", personCertification.issuingCompany);
            writer.writeDateOnlyValue("startDate", personCertification.startDate);
            writer.writeStringValue("thumbnailUrl", personCertification.thumbnailUrl);
            writer.writeStringValue("webUrl", personCertification.webUrl);
}
