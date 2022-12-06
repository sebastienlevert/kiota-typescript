import {OmaSettingDateTime} from './index';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingDateTime(writer: SerializationWriter, omaSettingDateTime: OmaSettingDateTime | undefined = {}) : void {
        serializeOmaSetting(writer, omaSettingDateTime)
            writer.writeDateValue("value", omaSettingDateTime.value);
}
