import {BroadcastMeetingCaptionSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBroadcastMeetingCaptionSettings(broadcastMeetingCaptionSettings: BroadcastMeetingCaptionSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isCaptionEnabled": n => { broadcastMeetingCaptionSettings.isCaptionEnabled = n.getBooleanValue() as any ; },
        "spokenLanguage": n => { broadcastMeetingCaptionSettings.spokenLanguage = n.getStringValue() as any ; },
        "translationLanguages": n => { broadcastMeetingCaptionSettings.translationLanguages = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
