import {EducationClassCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationClass} from './serializeEducationClass';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationClassCollectionResponse(writer: SerializationWriter, educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationClassCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationClassCollectionResponse.value as any, serializeEducationClass);
}
