import {RubricQualitySelectedColumnModelCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRubricQualitySelectedColumnModel} from './serializeRubricQualitySelectedColumnModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualitySelectedColumnModelCollectionResponse(writer: SerializationWriter, rubricQualitySelectedColumnModelCollectionResponse: RubricQualitySelectedColumnModelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rubricQualitySelectedColumnModelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rubricQualitySelectedColumnModelCollectionResponse.value as any, serializeRubricQualitySelectedColumnModel);
}
