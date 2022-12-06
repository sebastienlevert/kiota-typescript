import {EducationOutcomeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOutcomeCollectionResponse(writer: SerializationWriter, educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationOutcomeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationOutcomeCollectionResponse.value as any, serializeEducationOutcome);
}
