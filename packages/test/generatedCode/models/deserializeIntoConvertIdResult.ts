import {deserializeIntoGenericError} from './deserializeIntoGenericError';
import {ConvertIdResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConvertIdResult(convertIdResult: ConvertIdResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "errorDetails": n => { convertIdResult.errorDetails = n.getObject(deserializeIntoGenericError) as any ; },
        "@odata.type": n => { convertIdResult.odataType = n.getStringValue() as any ; },
        "sourceId": n => { convertIdResult.sourceId = n.getStringValue() as any ; },
        "targetId": n => { convertIdResult.targetId = n.getStringValue() as any ; },
    }
}
