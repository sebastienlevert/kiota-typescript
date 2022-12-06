import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserFlowLanguagePage} from './deserializeIntoUserFlowLanguagePage';
import {UserFlowLanguagePageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguagePageCollectionResponse(userFlowLanguagePageCollectionResponse: UserFlowLanguagePageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userFlowLanguagePageCollectionResponse),
        "value": n => { userFlowLanguagePageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserFlowLanguagePage) as any ; },
    }
}
