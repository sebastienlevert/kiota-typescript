import {deserializeIntoConditionalAccessFilter} from './deserializeIntoConditionalAccessFilter';
import {ConditionalAccessDevices} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessDevices(conditionalAccessDevices: ConditionalAccessDevices | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceFilter": n => { conditionalAccessDevices.deviceFilter = n.getObject(deserializeIntoConditionalAccessFilter) as any ; },
        "@odata.type": n => { conditionalAccessDevices.odataType = n.getStringValue() as any ; },
    }
}
