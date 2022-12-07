import {TeamGuestSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamGuestSettings(writer: SerializationWriter, teamGuestSettings: TeamGuestSettings | undefined = {}) : void {
            writer.writeBooleanValue("allowCreateUpdateChannels", teamGuestSettings.allowCreateUpdateChannels);
            writer.writeBooleanValue("allowDeleteChannels", teamGuestSettings.allowDeleteChannels);
}
