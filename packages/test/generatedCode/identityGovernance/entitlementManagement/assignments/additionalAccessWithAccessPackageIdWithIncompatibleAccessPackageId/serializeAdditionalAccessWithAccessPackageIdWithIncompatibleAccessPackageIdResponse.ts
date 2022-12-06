import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse(writer: SerializationWriter, additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse: AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse.value as any, serializeAccessPackageAssignment);
}
