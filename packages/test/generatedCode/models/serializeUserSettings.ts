import {UserSettings} from './index';
import {serializeContactMergeSuggestions} from './serializeContactMergeSuggestions';
import {serializeEntity} from './serializeEntity';
import {serializeRegionalAndLanguageSettings} from './serializeRegionalAndLanguageSettings';
import {serializeShiftPreferences} from './serializeShiftPreferences';
import {serializeUserInsightsSettings} from './serializeUserInsightsSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSettings(writer: SerializationWriter, userSettings: UserSettings | undefined = {}) : void {
        serializeEntity(writer, userSettings)
            writer.writeObjectValueFromMethod("contactMergeSuggestions", userSettings.contactMergeSuggestions as any, serializeContactMergeSuggestions);
            writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", userSettings.contributionToContentDiscoveryAsOrganizationDisabled);
            writer.writeBooleanValue("contributionToContentDiscoveryDisabled", userSettings.contributionToContentDiscoveryDisabled);
            writer.writeObjectValueFromMethod("itemInsights", userSettings.itemInsights as any, serializeUserInsightsSettings);
            writer.writeObjectValueFromMethod("regionalAndLanguageSettings", userSettings.regionalAndLanguageSettings as any, serializeRegionalAndLanguageSettings);
            writer.writeObjectValueFromMethod("shiftPreferences", userSettings.shiftPreferences as any, serializeShiftPreferences);
}
