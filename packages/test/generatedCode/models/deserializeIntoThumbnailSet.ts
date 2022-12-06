import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoThumbnail} from './deserializeIntoThumbnail';
import {ThumbnailSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailSet(thumbnailSet: ThumbnailSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(thumbnailSet),
        "large": n => { thumbnailSet.large = n.getObject(deserializeIntoThumbnail) as any ; },
        "medium": n => { thumbnailSet.medium = n.getObject(deserializeIntoThumbnail) as any ; },
        "small": n => { thumbnailSet.small = n.getObject(deserializeIntoThumbnail) as any ; },
        "source": n => { thumbnailSet.source = n.getObject(deserializeIntoThumbnail) as any ; },
    }
}
