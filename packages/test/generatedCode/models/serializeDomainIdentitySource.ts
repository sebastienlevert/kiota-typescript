import {DomainIdentitySource} from './index';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainIdentitySource(writer: SerializationWriter, domainIdentitySource: DomainIdentitySource | undefined = {}) : void {
        serializeIdentitySource(writer, domainIdentitySource)
            writer.writeStringValue("displayName", domainIdentitySource.displayName);
            writer.writeStringValue("domainName", domainIdentitySource.domainName);
}
