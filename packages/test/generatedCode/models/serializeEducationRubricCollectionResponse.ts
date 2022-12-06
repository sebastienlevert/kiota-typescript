import {EducationRubricCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationRubric} from './serializeEducationRubric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubricCollectionResponse(writer: SerializationWriter, educationRubricCollectionResponse: EducationRubricCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationRubricCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationRubricCollectionResponse.value as any, serializeEducationRubric);
}
