import {deserializeIntoPublicErrorDetail} from './deserializeIntoPublicErrorDetail';
import {deserializeIntoPublicInnerError} from './deserializeIntoPublicInnerError';
import {PublicError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicError(publicError: PublicError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicError.code = n.getStringValue() as any ; },
        "details": n => { publicError.details = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPublicErrorDetail) as any ; },
        "innerError": n => { publicError.innerError = n.getObject(deserializeIntoPublicInnerError) as any ; },
        "message": n => { publicError.message = n.getStringValue() as any ; },
        "target": n => { publicError.target = n.getStringValue() as any ; },
    }
}
