import {GiphyRatingType} from './giphyRatingType';
import {TeamFunSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamFunSettings(teamFunSettings: TeamFunSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomMemes": n => { teamFunSettings.allowCustomMemes = n.getBooleanValue() as any ; },
        "allowGiphy": n => { teamFunSettings.allowGiphy = n.getBooleanValue() as any ; },
        "allowStickersAndMemes": n => { teamFunSettings.allowStickersAndMemes = n.getBooleanValue() as any ; },
        "giphyContentRating": n => { teamFunSettings.giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType) as any ; },
    }
}
