import {Video} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVideo(writer: SerializationWriter, video: Video | undefined = {}) : void {
            writer.writeNumberValue("audioBitsPerSample", video.audioBitsPerSample);
            writer.writeNumberValue("audioChannels", video.audioChannels);
            writer.writeStringValue("audioFormat", video.audioFormat);
            writer.writeNumberValue("audioSamplesPerSecond", video.audioSamplesPerSecond);
            writer.writeNumberValue("bitrate", video.bitrate);
            writer.writeNumberValue("duration", video.duration);
            writer.writeStringValue("fourCC", video.fourCC);
            writer.writeNumberValue("frameRate", video.frameRate);
            writer.writeNumberValue("height", video.height);
            writer.writeNumberValue("width", video.width);
}
