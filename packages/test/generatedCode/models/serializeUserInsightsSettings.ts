import {UserInsightsSettings} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserInsightsSettings(writer: SerializationWriter, userInsightsSettings: UserInsightsSettings | undefined = {}) : void {
        serializeEntity(writer, userInsightsSettings)
            writer.writeBooleanValue("isEnabled", userInsightsSettings.isEnabled);
}
