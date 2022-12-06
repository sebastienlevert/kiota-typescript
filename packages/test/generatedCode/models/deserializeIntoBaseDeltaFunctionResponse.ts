import {BaseDeltaFunctionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseDeltaFunctionResponse(baseDeltaFunctionResponse: BaseDeltaFunctionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.deltaLink": n => { baseDeltaFunctionResponse.odataDeltaLink = n.getStringValue() as any ; },
        "@odata.nextLink": n => { baseDeltaFunctionResponse.odataNextLink = n.getStringValue() as any ; },
    }
}
