import {deserializeIntoPublicErrorDetail} from './deserializeIntoPublicErrorDetail';
import {PublicInnerError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicInnerError(publicInnerError: PublicInnerError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicInnerError.code = n.getStringValue() as any ; },
        "details": n => { publicInnerError.details = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPublicErrorDetail) as any ; },
        "message": n => { publicInnerError.message = n.getStringValue() as any ; },
        "target": n => { publicInnerError.target = n.getStringValue() as any ; },
    }
}
