import {MetadataEntry} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMetadataEntry(metadataEntry: MetadataEntry | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { metadataEntry.key = n.getStringValue() as any ; },
        "value": n => { metadataEntry.value = n.getStringValue() as any ; },
    }
}
