import {ThumbnailSet} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeThumbnail} from './serializeThumbnail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnailSet(writer: SerializationWriter, thumbnailSet: ThumbnailSet | undefined = {}) : void {
        serializeEntity(writer, thumbnailSet)
            writer.writeObjectValueFromMethod("large", thumbnailSet.large as any, serializeThumbnail);
            writer.writeObjectValueFromMethod("medium", thumbnailSet.medium as any, serializeThumbnail);
            writer.writeObjectValueFromMethod("small", thumbnailSet.small as any, serializeThumbnail);
            writer.writeObjectValueFromMethod("source", thumbnailSet.source as any, serializeThumbnail);
}
