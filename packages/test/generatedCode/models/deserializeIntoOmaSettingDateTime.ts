import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingDateTime} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingDateTime(omaSettingDateTime: OmaSettingDateTime | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingDateTime),
        "value": n => { omaSettingDateTime.value = n.getDateValue() as any ; },
    }
}
