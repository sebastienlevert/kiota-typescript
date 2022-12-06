import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocaleInfo} from '../../../../models/deserializeIntoLocaleInfo';
import {SupportedLanguagesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedLanguagesResponse(supportedLanguagesResponse: SupportedLanguagesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedLanguagesResponse),
        "value": n => { supportedLanguagesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocaleInfo) as any ; },
    }
}
