import {OmaSettingInteger} from './index';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingInteger(writer: SerializationWriter, omaSettingInteger: OmaSettingInteger | undefined = {}) : void {
        serializeOmaSetting(writer, omaSettingInteger)
            writer.writeNumberValue("value", omaSettingInteger.value);
}
