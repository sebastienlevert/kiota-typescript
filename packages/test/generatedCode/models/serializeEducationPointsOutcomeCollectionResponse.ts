import {EducationPointsOutcomeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationPointsOutcome} from './serializeEducationPointsOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPointsOutcomeCollectionResponse(writer: SerializationWriter, educationPointsOutcomeCollectionResponse: EducationPointsOutcomeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationPointsOutcomeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationPointsOutcomeCollectionResponse.value as any, serializeEducationPointsOutcome);
}
