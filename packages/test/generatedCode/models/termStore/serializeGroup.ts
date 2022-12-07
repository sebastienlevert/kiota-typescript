import {serializeEntity} from '../serializeEntity';
import {Group} from './index';
import {serializeSet} from './serializeSet';
import {TermGroupScope} from './termGroupScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroup(writer: SerializationWriter, group: Group | undefined = {}) : void {
        serializeEntity(writer, group)
            writer.writeDateValue("createdDateTime", group.createdDateTime);
            writer.writeStringValue("description", group.description);
            writer.writeStringValue("displayName", group.displayName);
            writer.writeStringValue("parentSiteId", group.parentSiteId);
            writer.writeEnumValue<TermGroupScope>("scope", group.scope);
            writer.writeCollectionOfObjectValuesFromMethod("sets", group.sets as any, serializeSet);
}
