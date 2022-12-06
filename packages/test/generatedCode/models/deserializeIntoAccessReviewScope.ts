import {AccessReviewScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScope(accessReviewScope: AccessReviewScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewScope.odataType = n.getStringValue() as any ; },
    }
}
