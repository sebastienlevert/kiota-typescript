import {CertificateBasedAuthConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfigurationCollectionResponse(writer: SerializationWriter, certificateBasedAuthConfigurationCollectionResponse: CertificateBasedAuthConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, certificateBasedAuthConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", certificateBasedAuthConfigurationCollectionResponse.value as any, serializeCertificateBasedAuthConfiguration);
}
