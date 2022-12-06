import {MediaInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaInfo(writer: SerializationWriter, mediaInfo: MediaInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", mediaInfo.odataType);
            writer.writeStringValue("resourceId", mediaInfo.resourceId);
            writer.writeStringValue("uri", mediaInfo.uri);
}
