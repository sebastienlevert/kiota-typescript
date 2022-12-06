import {ResultInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResultInfo(resultInfo: ResultInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { resultInfo.code = n.getNumberValue() as any ; },
        "message": n => { resultInfo.message = n.getStringValue() as any ; },
        "@odata.type": n => { resultInfo.odataType = n.getStringValue() as any ; },
        "subcode": n => { resultInfo.subcode = n.getNumberValue() as any ; },
    }
}
