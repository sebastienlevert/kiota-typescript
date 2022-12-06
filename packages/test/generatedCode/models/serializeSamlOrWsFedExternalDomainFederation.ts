import {SamlOrWsFedExternalDomainFederation} from './index';
import {serializeExternalDomainName} from './serializeExternalDomainName';
import {serializeSamlOrWsFedProvider} from './serializeSamlOrWsFedProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedExternalDomainFederation(writer: SerializationWriter, samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {}) : void {
        serializeSamlOrWsFedProvider(writer, samlOrWsFedExternalDomainFederation)
            writer.writeCollectionOfObjectValuesFromMethod("domains", samlOrWsFedExternalDomainFederation.domains as any, serializeExternalDomainName);
}
