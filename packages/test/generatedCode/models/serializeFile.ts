import {File} from './index';
import {serializeHashes} from './serializeHashes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFile(writer: SerializationWriter, file: File | undefined = {}) : void {
            writer.writeObjectValueFromMethod("hashes", file.hashes as any, serializeHashes);
            writer.writeStringValue("mimeType", file.mimeType);
            writer.writeBooleanValue("processingMetadata", file.processingMetadata);
}
