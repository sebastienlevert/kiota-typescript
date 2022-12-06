import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingBoolean} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingBoolean(omaSettingBoolean: OmaSettingBoolean | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingBoolean),
        "value": n => { omaSettingBoolean.value = n.getBooleanValue() as any ; },
    }
}
