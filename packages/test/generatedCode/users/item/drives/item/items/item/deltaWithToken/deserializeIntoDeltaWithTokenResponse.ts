import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {deserializeIntoDriveItem} from '../../../../../../../models/deserializeIntoDriveItem';
import {DeltaWithTokenResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaWithTokenResponse(deltaWithTokenResponse: DeltaWithTokenResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaWithTokenResponse),
        "value": n => { deltaWithTokenResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItem) as any ; },
    }
}
