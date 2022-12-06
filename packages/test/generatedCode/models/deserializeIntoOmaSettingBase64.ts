import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingBase64} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingBase64(omaSettingBase64: OmaSettingBase64 | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingBase64),
        "fileName": n => { omaSettingBase64.fileName = n.getStringValue() as any ; },
        "value": n => { omaSettingBase64.value = n.getStringValue() as any ; },
    }
}
