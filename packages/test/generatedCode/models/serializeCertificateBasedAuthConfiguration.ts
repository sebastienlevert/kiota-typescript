import {CertificateBasedAuthConfiguration} from './index';
import {serializeCertificateAuthority} from './serializeCertificateAuthority';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateBasedAuthConfiguration(writer: SerializationWriter, certificateBasedAuthConfiguration: CertificateBasedAuthConfiguration | undefined = {}) : void {
        serializeEntity(writer, certificateBasedAuthConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("certificateAuthorities", certificateBasedAuthConfiguration.certificateAuthorities as any, serializeCertificateAuthority);
}
