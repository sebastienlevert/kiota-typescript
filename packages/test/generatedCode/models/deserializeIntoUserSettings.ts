import {deserializeIntoContactMergeSuggestions} from './deserializeIntoContactMergeSuggestions';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoRegionalAndLanguageSettings} from './deserializeIntoRegionalAndLanguageSettings';
import {deserializeIntoShiftPreferences} from './deserializeIntoShiftPreferences';
import {deserializeIntoUserInsightsSettings} from './deserializeIntoUserInsightsSettings';
import {UserSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSettings(userSettings: UserSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userSettings),
        "contactMergeSuggestions": n => { userSettings.contactMergeSuggestions = n.getObject(deserializeIntoContactMergeSuggestions) as any ; },
        "contributionToContentDiscoveryAsOrganizationDisabled": n => { userSettings.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue() as any ; },
        "contributionToContentDiscoveryDisabled": n => { userSettings.contributionToContentDiscoveryDisabled = n.getBooleanValue() as any ; },
        "itemInsights": n => { userSettings.itemInsights = n.getObject(deserializeIntoUserInsightsSettings) as any ; },
        "regionalAndLanguageSettings": n => { userSettings.regionalAndLanguageSettings = n.getObject(deserializeIntoRegionalAndLanguageSettings) as any ; },
        "shiftPreferences": n => { userSettings.shiftPreferences = n.getObject(deserializeIntoShiftPreferences) as any ; },
    }
}
