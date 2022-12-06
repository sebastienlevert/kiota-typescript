import {ArchiveResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchiveResponse(archiveResponse: ArchiveResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { archiveResponse.value = n.getBooleanValue() as any ; },
    }
}
