import {MediaStream} from './index';
import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaStream(writer: SerializationWriter, mediaStream: MediaStream | undefined = {}) : void {
            writer.writeEnumValue<MediaDirection>("direction", mediaStream.direction);
            writer.writeStringValue("label", mediaStream.label);
            writer.writeEnumValue<Modality>("mediaType", mediaStream.mediaType);
            writer.writeStringValue("@odata.type", mediaStream.odataType);
            writer.writeBooleanValue("serverMuted", mediaStream.serverMuted);
            writer.writeStringValue("sourceId", mediaStream.sourceId);
}
