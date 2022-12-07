import {Tag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTag(writer: SerializationWriter, tag: Tag | undefined = {}) : void {
            writer.writeNumberValue("id", tag.id);
            writer.writeStringValue("name", tag.name);
}
