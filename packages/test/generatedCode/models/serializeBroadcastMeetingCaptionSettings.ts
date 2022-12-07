import {BroadcastMeetingCaptionSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBroadcastMeetingCaptionSettings(writer: SerializationWriter, broadcastMeetingCaptionSettings: BroadcastMeetingCaptionSettings | undefined = {}) : void {
            writer.writeBooleanValue("isCaptionEnabled", broadcastMeetingCaptionSettings.isCaptionEnabled);
            writer.writeStringValue("spokenLanguage", broadcastMeetingCaptionSettings.spokenLanguage);
            writer.writeCollectionOfPrimitiveValues<string>("translationLanguages", broadcastMeetingCaptionSettings.translationLanguages);
}
