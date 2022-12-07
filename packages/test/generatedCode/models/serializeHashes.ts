import {Hashes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHashes(writer: SerializationWriter, hashes: Hashes | undefined = {}) : void {
            writer.writeStringValue("crc32Hash", hashes.crc32Hash);
            writer.writeStringValue("quickXorHash", hashes.quickXorHash);
            writer.writeStringValue("sha1Hash", hashes.sha1Hash);
            writer.writeStringValue("sha256Hash", hashes.sha256Hash);
}
