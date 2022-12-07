import {Mention} from './index';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMention(writer: SerializationWriter, mention: Mention | undefined = {}) : void {
        serializeEntity(writer, mention)
            writer.writeStringValue("application", mention.application);
            writer.writeStringValue("clientReference", mention.clientReference);
            writer.writeObjectValueFromMethod("createdBy", mention.createdBy as any, serializeEmailAddress);
            writer.writeDateValue("createdDateTime", mention.createdDateTime);
            writer.writeStringValue("deepLink", mention.deepLink);
            writer.writeObjectValueFromMethod("mentioned", mention.mentioned as any, serializeEmailAddress);
            writer.writeStringValue("mentionText", mention.mentionText);
            writer.writeDateValue("serverCreatedDateTime", mention.serverCreatedDateTime);
}
