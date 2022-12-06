import {UserFlowLanguagePageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePageCollectionResponse(writer: SerializationWriter, userFlowLanguagePageCollectionResponse: UserFlowLanguagePageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguagePageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userFlowLanguagePageCollectionResponse.value as any, serializeUserFlowLanguagePage);
}
