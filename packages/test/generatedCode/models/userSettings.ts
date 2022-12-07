import {ContactMergeSuggestions, Entity, RegionalAndLanguageSettings, ShiftPreferences, UserInsightsSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSettings extends Entity, Partial<Parsable> {
    /** The contactMergeSuggestions property */
    contactMergeSuggestions?: ContactMergeSuggestions;
    /** Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center. */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
    /** When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve. */
    contributionToContentDiscoveryDisabled?: boolean;
    /** The itemInsights property */
    itemInsights?: UserInsightsSettings;
    /** The regionalAndLanguageSettings property */
    regionalAndLanguageSettings?: RegionalAndLanguageSettings;
    /** The shiftPreferences property */
    shiftPreferences?: ShiftPreferences;
}
