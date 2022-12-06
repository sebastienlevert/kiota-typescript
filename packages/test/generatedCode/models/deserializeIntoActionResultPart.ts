import {deserializeIntoPublicError} from './deserializeIntoPublicError';
import {ActionResultPart} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActionResultPart(actionResultPart: ActionResultPart | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { actionResultPart.error_escaped = n.getObject(deserializeIntoPublicError) as any ; },
        "@odata.type": n => { actionResultPart.odataType = n.getStringValue() as any ; },
    }
}
