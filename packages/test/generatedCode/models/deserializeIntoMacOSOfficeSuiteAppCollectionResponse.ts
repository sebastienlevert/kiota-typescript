import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSOfficeSuiteApp} from './deserializeIntoMacOSOfficeSuiteApp';
import {MacOSOfficeSuiteAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSOfficeSuiteAppCollectionResponse(macOSOfficeSuiteAppCollectionResponse: MacOSOfficeSuiteAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSOfficeSuiteAppCollectionResponse),
        "value": n => { macOSOfficeSuiteAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSOfficeSuiteApp) as any ; },
    }
}
