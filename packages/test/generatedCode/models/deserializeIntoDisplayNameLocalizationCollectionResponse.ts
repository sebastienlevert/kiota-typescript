import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDisplayNameLocalization} from './deserializeIntoDisplayNameLocalization';
import {DisplayNameLocalizationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayNameLocalizationCollectionResponse(displayNameLocalizationCollectionResponse: DisplayNameLocalizationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(displayNameLocalizationCollectionResponse),
        "value": n => { displayNameLocalizationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDisplayNameLocalization) as any ; },
    }
}
