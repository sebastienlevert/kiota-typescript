import {deserializeIntoHashes} from './deserializeIntoHashes';
import {File} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFile(file: File | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hashes": n => { file.hashes = n.getObject(deserializeIntoHashes) as any ; },
        "mimeType": n => { file.mimeType = n.getStringValue() as any ; },
        "processingMetadata": n => { file.processingMetadata = n.getBooleanValue() as any ; },
    }
}
