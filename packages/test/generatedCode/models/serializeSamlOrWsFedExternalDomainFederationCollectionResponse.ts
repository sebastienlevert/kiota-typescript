import {SamlOrWsFedExternalDomainFederationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSamlOrWsFedExternalDomainFederation} from './serializeSamlOrWsFedExternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedExternalDomainFederationCollectionResponse(writer: SerializationWriter, samlOrWsFedExternalDomainFederationCollectionResponse: SamlOrWsFedExternalDomainFederationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, samlOrWsFedExternalDomainFederationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", samlOrWsFedExternalDomainFederationCollectionResponse.value as any, serializeSamlOrWsFedExternalDomainFederation);
}
