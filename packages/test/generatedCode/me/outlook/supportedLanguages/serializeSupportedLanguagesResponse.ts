import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeLocaleInfo} from '../../../models/serializeLocaleInfo';
import {SupportedLanguagesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedLanguagesResponse(writer: SerializationWriter, supportedLanguagesResponse: SupportedLanguagesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedLanguagesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", supportedLanguagesResponse.value as any, serializeLocaleInfo);
}
