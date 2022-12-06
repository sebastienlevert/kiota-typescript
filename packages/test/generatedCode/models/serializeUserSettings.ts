import {UserSettings} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeShiftPreferences} from './serializeShiftPreferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSettings(writer: SerializationWriter, userSettings: UserSettings | undefined = {}) : void {
        serializeEntity(writer, userSettings)
            writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", userSettings.contributionToContentDiscoveryAsOrganizationDisabled);
            writer.writeBooleanValue("contributionToContentDiscoveryDisabled", userSettings.contributionToContentDiscoveryDisabled);
            writer.writeObjectValueFromMethod("shiftPreferences", userSettings.shiftPreferences as any, serializeShiftPreferences);
}
