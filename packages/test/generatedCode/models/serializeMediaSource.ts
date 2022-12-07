import {MediaSource} from './index';
import {MediaSourceContentCategory} from './mediaSourceContentCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaSource(writer: SerializationWriter, mediaSource: MediaSource | undefined = {}) : void {
            writer.writeEnumValue<MediaSourceContentCategory>("contentCategory", mediaSource.contentCategory);
}
