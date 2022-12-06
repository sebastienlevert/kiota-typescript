import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingString} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingString(omaSettingString: OmaSettingString | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingString),
        "value": n => { omaSettingString.value = n.getStringValue() as any ; },
    }
}
