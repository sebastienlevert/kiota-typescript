import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoShiftPreferences} from './deserializeIntoShiftPreferences';
import {UserSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSettings(userSettings: UserSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userSettings),
        "contributionToContentDiscoveryAsOrganizationDisabled": n => { userSettings.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue() as any ; },
        "contributionToContentDiscoveryDisabled": n => { userSettings.contributionToContentDiscoveryDisabled = n.getBooleanValue() as any ; },
        "shiftPreferences": n => { userSettings.shiftPreferences = n.getObject(deserializeIntoShiftPreferences) as any ; },
    }
}
