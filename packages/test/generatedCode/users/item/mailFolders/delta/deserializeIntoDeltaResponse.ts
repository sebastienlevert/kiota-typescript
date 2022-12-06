import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {deserializeIntoMailFolder} from '../../../../models/deserializeIntoMailFolder';
import {DeltaResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailFolder) as any ; },
    }
}
