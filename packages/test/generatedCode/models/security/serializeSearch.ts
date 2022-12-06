import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {Search} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearch(writer: SerializationWriter, search: Search | undefined = {}) : void {
        serializeEntity(writer, search)
            writer.writeStringValue("contentQuery", search.contentQuery);
            writer.writeObjectValueFromMethod("createdBy", search.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", search.createdDateTime);
            writer.writeStringValue("description", search.description);
            writer.writeStringValue("displayName", search.displayName);
            writer.writeObjectValueFromMethod("lastModifiedBy", search.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", search.lastModifiedDateTime);
}
