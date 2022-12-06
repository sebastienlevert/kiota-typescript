import {X509CertificateRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeX509CertificateRule} from './serializeX509CertificateRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateRuleCollectionResponse(writer: SerializationWriter, x509CertificateRuleCollectionResponse: X509CertificateRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, x509CertificateRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", x509CertificateRuleCollectionResponse.value as any, serializeX509CertificateRule);
}
