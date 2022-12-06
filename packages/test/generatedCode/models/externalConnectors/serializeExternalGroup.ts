import {serializeEntity} from '../serializeEntity';
import {ExternalGroup} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalGroup(writer: SerializationWriter, externalGroup: ExternalGroup | undefined = {}) : void {
        serializeEntity(writer, externalGroup)
            writer.writeStringValue("description", externalGroup.description);
            writer.writeStringValue("displayName", externalGroup.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("members", externalGroup.members as any, serializeIdentity);
}
