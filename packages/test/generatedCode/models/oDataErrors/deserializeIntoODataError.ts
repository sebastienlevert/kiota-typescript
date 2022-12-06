import {deserializeIntoMainError} from './deserializeIntoMainError';
import {ODataError} from './index';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoODataError(oDataError: ODataError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { oDataError.error_escaped = n.getObject(deserializeIntoMainError) as any ; },
    }
}
