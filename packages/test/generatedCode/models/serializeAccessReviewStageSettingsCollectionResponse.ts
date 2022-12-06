import {AccessReviewStageSettingsCollectionResponse} from './index';
import {serializeAccessReviewStageSettings} from './serializeAccessReviewStageSettings';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageSettingsCollectionResponse(writer: SerializationWriter, accessReviewStageSettingsCollectionResponse: AccessReviewStageSettingsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewStageSettingsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewStageSettingsCollectionResponse.value as any, serializeAccessReviewStageSettings);
}
