import {TermsAndConditionsAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignmentCollectionResponse(writer: SerializationWriter, termsAndConditionsAssignmentCollectionResponse: TermsAndConditionsAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", termsAndConditionsAssignmentCollectionResponse.value as any, serializeTermsAndConditionsAssignment);
}
