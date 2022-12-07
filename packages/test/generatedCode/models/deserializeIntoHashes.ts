import {Hashes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHashes(hashes: Hashes | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "crc32Hash": n => { hashes.crc32Hash = n.getStringValue() as any ; },
        "quickXorHash": n => { hashes.quickXorHash = n.getStringValue() as any ; },
        "sha1Hash": n => { hashes.sha1Hash = n.getStringValue() as any ; },
        "sha256Hash": n => { hashes.sha256Hash = n.getStringValue() as any ; },
    }
}
