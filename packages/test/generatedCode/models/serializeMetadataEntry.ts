import {MetadataEntry} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMetadataEntry(writer: SerializationWriter, metadataEntry: MetadataEntry | undefined = {}) : void {
            writer.writeStringValue("key", metadataEntry.key);
            writer.writeStringValue("value", metadataEntry.value);
}
