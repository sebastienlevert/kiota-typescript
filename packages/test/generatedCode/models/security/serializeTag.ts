import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {Tag} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTag(writer: SerializationWriter, tag: Tag | undefined = {}) : void {
        serializeEntity(writer, tag)
            writer.writeObjectValueFromMethod("createdBy", tag.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("description", tag.description);
            writer.writeStringValue("displayName", tag.displayName);
            writer.writeDateValue("lastModifiedDateTime", tag.lastModifiedDateTime);
}
