import {X509CertificateUserBindingCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeX509CertificateUserBinding} from './serializeX509CertificateUserBinding';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateUserBindingCollectionResponse(writer: SerializationWriter, x509CertificateUserBindingCollectionResponse: X509CertificateUserBindingCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, x509CertificateUserBindingCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", x509CertificateUserBindingCollectionResponse.value as any, serializeX509CertificateUserBinding);
}
