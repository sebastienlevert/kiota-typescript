import {Pkcs12CertificateInformationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePkcs12CertificateInformation} from './serializePkcs12CertificateInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePkcs12CertificateInformationCollectionResponse(writer: SerializationWriter, pkcs12CertificateInformationCollectionResponse: Pkcs12CertificateInformationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, pkcs12CertificateInformationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", pkcs12CertificateInformationCollectionResponse.value as any, serializePkcs12CertificateInformation);
}
