import {AccessPackageCollectionResponse} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCollectionResponse(writer: SerializationWriter, accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageCollectionResponse.value as any, serializeAccessPackage);
}
