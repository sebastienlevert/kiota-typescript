import {deserializeIntoErrorDetails} from './deserializeIntoErrorDetails';
import {deserializeIntoInnerError} from './deserializeIntoInnerError';
import {MainError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMainError(mainError: MainError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { mainError.code = n.getStringValue() as any ; },
        "details": n => { mainError.details = n.getCollectionOfObjectValuesFromMethod(deserializeIntoErrorDetails) as any ; },
        "innererror": n => { mainError.innererror = n.getObject(deserializeIntoInnerError) as any ; },
        "message": n => { mainError.message = n.getStringValue() as any ; },
        "target": n => { mainError.target = n.getStringValue() as any ; },
    }
}
