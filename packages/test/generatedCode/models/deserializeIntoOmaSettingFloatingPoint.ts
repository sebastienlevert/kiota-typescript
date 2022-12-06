import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingFloatingPoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingFloatingPoint(omaSettingFloatingPoint: OmaSettingFloatingPoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingFloatingPoint),
        "value": n => { omaSettingFloatingPoint.value = n.getNumberValue() as any ; },
    }
}
