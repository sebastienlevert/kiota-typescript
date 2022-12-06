import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserFlowLanguageConfiguration} from './deserializeIntoUserFlowLanguageConfiguration';
import {UserFlowLanguageConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguageConfigurationCollectionResponse(userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userFlowLanguageConfigurationCollectionResponse),
        "value": n => { userFlowLanguageConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserFlowLanguageConfiguration) as any ; },
    }
}
