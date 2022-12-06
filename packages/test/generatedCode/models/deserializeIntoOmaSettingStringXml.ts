import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingStringXml} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingStringXml(omaSettingStringXml: OmaSettingStringXml | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingStringXml),
        "fileName": n => { omaSettingStringXml.fileName = n.getStringValue() as any ; },
        "value": n => { omaSettingStringXml.value = n.getStringValue() as any ; },
    }
}
