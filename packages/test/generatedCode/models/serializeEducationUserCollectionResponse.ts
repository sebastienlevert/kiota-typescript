import {EducationUserCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationUser} from './serializeEducationUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationUserCollectionResponse(writer: SerializationWriter, educationUserCollectionResponse: EducationUserCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationUserCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationUserCollectionResponse.value as any, serializeEducationUser);
}
