import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeRecentNotebook} from '../../../../../models/serializeRecentNotebook';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetRecentNotebooksWithIncludePersonalNotebooksResponse(writer: SerializationWriter, getRecentNotebooksWithIncludePersonalNotebooksResponse: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getRecentNotebooksWithIncludePersonalNotebooksResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getRecentNotebooksWithIncludePersonalNotebooksResponse.value as any, serializeRecentNotebook);
}
