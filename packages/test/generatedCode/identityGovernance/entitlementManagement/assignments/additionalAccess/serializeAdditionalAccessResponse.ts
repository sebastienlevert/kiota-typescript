import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AdditionalAccessResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessResponse(writer: SerializationWriter, additionalAccessResponse: AdditionalAccessResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", additionalAccessResponse.value as any, serializeAccessPackageAssignment);
}
