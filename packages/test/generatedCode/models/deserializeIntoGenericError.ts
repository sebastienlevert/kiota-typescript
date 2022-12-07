import {GenericError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGenericError(genericError: GenericError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { genericError.code = n.getStringValue() as any ; },
        "message": n => { genericError.message = n.getStringValue() as any ; },
    }
}
