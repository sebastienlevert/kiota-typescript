import {RubricQualityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRubricQuality} from './serializeRubricQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualityCollectionResponse(writer: SerializationWriter, rubricQualityCollectionResponse: RubricQualityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rubricQualityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rubricQualityCollectionResponse.value as any, serializeRubricQuality);
}
