import {ApiResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApiResponse(apiResponse: ApiResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { apiResponse.code = n.getNumberValue() as any ; },
        "message": n => { apiResponse.message = n.getStringValue() as any ; },
        "type": n => { apiResponse.type = n.getStringValue() as any ; },
    }
}
