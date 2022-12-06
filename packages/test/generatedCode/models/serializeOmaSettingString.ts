import {OmaSettingString} from './index';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingString(writer: SerializationWriter, omaSettingString: OmaSettingString | undefined = {}) : void {
        serializeOmaSetting(writer, omaSettingString)
            writer.writeStringValue("value", omaSettingString.value);
}
