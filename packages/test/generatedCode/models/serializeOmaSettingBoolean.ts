import {OmaSettingBoolean} from './index';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingBoolean(writer: SerializationWriter, omaSettingBoolean: OmaSettingBoolean | undefined = {}) : void {
        serializeOmaSetting(writer, omaSettingBoolean)
            writer.writeBooleanValue("value", omaSettingBoolean.value);
}
