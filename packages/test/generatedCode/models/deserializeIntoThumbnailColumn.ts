import {ThumbnailColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailColumn(thumbnailColumn: ThumbnailColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
