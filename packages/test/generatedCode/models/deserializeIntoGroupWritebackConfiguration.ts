import {deserializeIntoWritebackConfiguration} from './deserializeIntoWritebackConfiguration';
import {GroupWritebackConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupWritebackConfiguration(groupWritebackConfiguration: GroupWritebackConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWritebackConfiguration(groupWritebackConfiguration),
        "onPremisesGroupType": n => { groupWritebackConfiguration.onPremisesGroupType = n.getStringValue() as any ; },
    }
}
