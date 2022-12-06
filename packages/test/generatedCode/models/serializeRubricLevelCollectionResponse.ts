import {RubricLevelCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRubricLevel} from './serializeRubricLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricLevelCollectionResponse(writer: SerializationWriter, rubricLevelCollectionResponse: RubricLevelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rubricLevelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rubricLevelCollectionResponse.value as any, serializeRubricLevel);
}
