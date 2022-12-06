import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingInteger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingInteger(omaSettingInteger: OmaSettingInteger | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingInteger),
        "value": n => { omaSettingInteger.value = n.getNumberValue() as any ; },
    }
}
