import {ErrorDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErrorDetails(errorDetails: ErrorDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { errorDetails.code = n.getStringValue() as any ; },
        "message": n => { errorDetails.message = n.getStringValue() as any ; },
        "target": n => { errorDetails.target = n.getStringValue() as any ; },
    }
}
