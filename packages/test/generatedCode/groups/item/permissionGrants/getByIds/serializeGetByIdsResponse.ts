import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObject} from '../../../../models/serializeDirectoryObject';
import {GetByIdsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetByIdsResponse(writer: SerializationWriter, getByIdsResponse: GetByIdsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getByIdsResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getByIdsResponse.value as any, serializeDirectoryObject);
}
