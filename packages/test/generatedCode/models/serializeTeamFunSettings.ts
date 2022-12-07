import {GiphyRatingType} from './giphyRatingType';
import {TeamFunSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamFunSettings(writer: SerializationWriter, teamFunSettings: TeamFunSettings | undefined = {}) : void {
            writer.writeBooleanValue("allowCustomMemes", teamFunSettings.allowCustomMemes);
            writer.writeBooleanValue("allowGiphy", teamFunSettings.allowGiphy);
            writer.writeBooleanValue("allowStickersAndMemes", teamFunSettings.allowStickersAndMemes);
            writer.writeEnumValue<GiphyRatingType>("giphyContentRating", teamFunSettings.giphyContentRating);
}
