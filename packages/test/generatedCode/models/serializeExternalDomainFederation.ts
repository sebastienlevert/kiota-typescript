import {ExternalDomainFederation} from './index';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainFederation(writer: SerializationWriter, externalDomainFederation: ExternalDomainFederation | undefined = {}) : void {
        serializeIdentitySource(writer, externalDomainFederation)
            writer.writeStringValue("displayName", externalDomainFederation.displayName);
            writer.writeStringValue("domainName", externalDomainFederation.domainName);
            writer.writeStringValue("issuerUri", externalDomainFederation.issuerUri);
}
