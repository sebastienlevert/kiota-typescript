import {CertificateAuthorityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateAuthorityCollectionResponse(writer: SerializationWriter, certificateAuthorityCollectionResponse: CertificateAuthorityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, certificateAuthorityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", certificateAuthorityCollectionResponse.value as any, serializeCertificateAuthority);
}
