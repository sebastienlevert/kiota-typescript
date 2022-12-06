import {DisplayNameLocalizationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDisplayNameLocalization} from './serializeDisplayNameLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisplayNameLocalizationCollectionResponse(writer: SerializationWriter, displayNameLocalizationCollectionResponse: DisplayNameLocalizationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, displayNameLocalizationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", displayNameLocalizationCollectionResponse.value as any, serializeDisplayNameLocalization);
}
