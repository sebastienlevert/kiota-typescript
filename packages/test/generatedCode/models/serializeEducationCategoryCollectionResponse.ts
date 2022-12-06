import {EducationCategoryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationCategory} from './serializeEducationCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategoryCollectionResponse(writer: SerializationWriter, educationCategoryCollectionResponse: EducationCategoryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationCategoryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationCategoryCollectionResponse.value as any, serializeEducationCategory);
}
