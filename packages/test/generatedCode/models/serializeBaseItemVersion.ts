import {BaseItemVersion} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePublicationFacet} from './serializePublicationFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItemVersion(writer: SerializationWriter, baseItemVersion: BaseItemVersion | undefined = {}) : void {
        serializeEntity(writer, baseItemVersion)
            writer.writeObjectValueFromMethod("lastModifiedBy", baseItemVersion.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", baseItemVersion.lastModifiedDateTime);
            writer.writeObjectValueFromMethod("publication", baseItemVersion.publication as any, serializePublicationFacet);
}
