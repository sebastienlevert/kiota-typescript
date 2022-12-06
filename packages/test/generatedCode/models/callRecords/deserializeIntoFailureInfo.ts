import {FailureStage} from './failureStage';
import {FailureInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFailureInfo(failureInfo: FailureInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { failureInfo.odataType = n.getStringValue() as any ; },
        "reason": n => { failureInfo.reason = n.getStringValue() as any ; },
        "stage": n => { failureInfo.stage = n.getEnumValue<FailureStage>(FailureStage) as any ; },
    }
}
